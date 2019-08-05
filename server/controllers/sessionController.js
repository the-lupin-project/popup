const Session = require('../data/sessionsModel');

const sessionController = {
  /**
   * createSession - creates a session if none exists for the current user
   *                 invoked after user logs in or signs up and is assigned a cookie
   * @param res - contains the user id we will use to create a session
   */
  createSession: (req, res, next) => {
    const cookieId = res.locals.userId;

    Session.findOne({ cookieId }, (err, session) => {
      if (err) {
        return next({
          log: 'MongoDB error creating session',
          message: { err: 'Error finding session' },
        });
      }
      // no session was found, so we can create one
      if (!session) {
        Session.create({ cookieId }, (error) => {
          if (error) {
            return next({
              log: 'MongoDB error creating Session',
              message: { err: 'Could not create new session' },
            });
          }
        });
      }
    });

    return next();
  },
  /**
   * isLoggedIn - checks if the user has an active session
   *
   * @param req - contains the cookie ssid we will use to look up a session
   */
  isLoggedIn: (req, res, next) => {
    const cookieId = req.cookies.ssid;

    // if no cookie, then they have to log on
    // FIX THIS
    if (!cookieId) {
      return res.redirect('/');
    }

    Session.findOne({ cookieId }, (err, data) => {
      if (err) {
        return next({
          log: 'MongoDB error verifying session',
          message: { err: 'MongoDB error finding session' },
        });
      }
      // if we didn't find a cookie, then ? redirect?
      if (!data) { // FIX THIS
        return res.redirect('/');
      }
    });

    return next();
  },
};

module.exports = sessionController;
