const db = require('../data/database');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

//

const userController = {
  /**
   * createUser - creates a user in the DB
   *
   * @param req - HTTP Request that contains user's
   *              first, last name, email, and password in the body
   * @param res - HTTP Response that will contain the created user's id in its locals property
   */
  createUser: async (req, res, next) => {
    // we require first name, last name, email, password to create user
    const { firstName, lastName, email, password } = req.body;
    // verify all required information;
    if (firstName && lastName && email && password) {
      // generate the hashed password so we can store that in the database
      const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
      const hashedPass = bcrypt.hashSync(password, salt);

      const query = {
        text: 'INSERT INTO users(first_name, last_name, email, password, role) VALUES($1, $2, $3, $4, $5) RETURNING id',
        values: [firstName, lastName, email, hashedPass, 'user'],
      };
      // query will return an array of ojects (in this case only 1 object will be returned)
      // the object will look like: {id: the users id in the table}
      try {
        const result = await db.query(query);
        // if no records were returned, throw an error
        if (result.rows.length === 0) {
          return next({
            log: 'Database error creating user',
            message: { err: 'Database uncaught error creating user' };
          });
        }
        res.locals.userId = result.rows[0].id;
      } catch (err) {
        return next({
          log: 'Database error creating user',
          message: { err: 'Database error while creating user' },
        });
      }
      // missing info
    } else {
      return next({
        log: 'Error creating user',
        message: { err: 'Missing user information' },
      });
    }

    return next();
  },
  /**
   * verifyUser - verifies the user's existence in the DB and stores the user id in res.locals
   *
   * @param req - cotains the user's email and password in the body
   * @param res - contains the user's id in its locals property
   */
  verifyUser: async (req, res, next) => {
    const { email, password } = req.body;
    // verify that both an email and a password were submitted
    if (email && password) {
      // we're going to find the user using only the email and then
      // verify they entered the correct password before we give the ok
      const query = {
        text: 'SELECT id, password FROM users WHERE email = $1',
        values: [email],
      };

      try {
        const result = await db.query(query);
        // no user found
        if (result.rows.length === 0) {
          return next({
            log: 'Database error verifying user',
            message: { err: 'Incorrect email' },
          });
        }
        // otherwise, hash the password and compare to the DB's record
        const hashedPw = response.rows[0].password;

        bcrypt.compare(password, hashedPw, (err, result) => {
          // correct password
          if (result) {
            res.locals.userId = response.rows[0].id;
          }
          return next({
            log: 'Database error verifying user',
            message: { err: 'Incorrect password' },
          });
        });
      } catch (err) {
        return next({
          log: 'Database error verifying user',
            message: { err: 'Database unknown error verifying user' },
        });
      }
    } else { // missing login info, can't authenticate
      return next({
        log: 'Error verifying user',
        message: { err: 'Missing credentials' },
      });
    }

    return next();
  },
  /**
   * updateRole - updates the current users role to organizer
   *
   * @param res - contains the userId in locals
   */
  updateRole: async (req, res, next) => {
    // NOTE: we assume that the user has been verified prior to changing their role
    // thus, we expect the response to contain the user's id
    if (!res.locals.userId) {
      return next({
        log: 'Error updating role',
        message: { err: 'Invalid user to update' },
      });
    }
    const { userId } = res.locals;
    const query = {
      text: 'UPDATE users SET role = $1 WHERE id = $2 RETURNING role',
      values: ['organizer', userId],
    };

    try {
      const result = await db.query(query);
      
      // no users were updated!
      if (!result.rows.length) {
        return next({
          log: 'Database error updating role',
          message: { err: 'Could not find user to update' },
        });
      }
      // user found and updated
      res.locals.role = response.rows[0].role;
    } catch (err) {
      return next({
        log: 'Database error updating role',
        message: { err: 'Could not find user to update' },
      });
    }

    return next();
  },
};


module.exports = userController;
