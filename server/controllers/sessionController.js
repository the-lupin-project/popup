const Session = require('../data/sessionsModel');

const sessionController = {
  /**
   * createSession - creates a session if none exists for the current user
   *                 invoked after user logs in or signs up and is assigned a cookie
   * @param res - contains the user id we will use to create a session
   */
  createSession: async (req, res, next) => {
    const cookieId = res.locals.userId;
    console.log(`cookieId is ${cookieId}`);

    let session = await Session.findOne({ cookieId }, (err) => {
      if (err) {
        return next({
          log: 'MongoDB error creating session',
          message: { err: 'Error finding session' },
        });
      }
    });
      // no session was found, so we can create one
    console.log(`session is ${session}`);
    if (!session) {
      session = await Session.create({ cookieId }, (error) => {
        if (error) {
          console.log(error);
          return next({
            log: 'MongoDB error creating Session',
            message: { err: 'Could not create new session' },
          });
        }
      });
    }

    return next();
  },
  /**
   * isLoggedIn - checks if the user has an active session
   *
   * @param req - contains the cookie ssid we will use to look up a session
   */
  isLoggedIn: async (req, res, next) => {
    const cookieId = req.cookies.ssid;

    // if no cookie, then they have to log on
    // FIX THIS
    if (!cookieId) {
      return res.redirect('/');
    }

    try {
      const data = await Session.findOne({ cookieId }, (err) => {
        if (err) {
          return next({
            log: 'MongoDB error verifying session',
            message: { err: 'MongoDB error finding session' },
          });
        }
      });
      // if we didn't find a cookie, then ? redirect?
      if (!data) { // FIX THIS
        return res.redirect('/');
      }

      return next();
    } catch (e) {
      return next({
        log: 'MongoDB error verifying session',
        message: { err: 'Session paramaters not valid' },
      });
    }
  },
};

module.exports = sessionController;
