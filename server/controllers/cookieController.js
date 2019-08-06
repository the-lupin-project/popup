const cookieController = {
  /**
   * setCookie - sets a cookie in the response based on the user's id
   *
   * @param res - contains the userId in its locals property
   */
  setCookie: (req, res, next) => {
    res.cookie('ssid', res.locals.userId, { httpOnly: true });

    return next();
  },
};

module.exports = cookieController;
