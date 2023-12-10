const checkLoggedIn = (req, res, next) => {
  // Redirects to /login if not logged in
  console.log (`\x1b[31m checkLoggedIn engaged'\x1b[0m`)

  if (!req.session.logged_in) {
    console.log (`\x1b[31m req.session.logged_in: FALSE - redirecting to '/login'\x1b[0m`)
      res.redirect('/login');
  } else {
    console.log (`\x1b[31m req.session.logged-in: TRUE - Next'\x1b[0m`)
      next();
  }
};

module.exports = checkLoggedIn;
