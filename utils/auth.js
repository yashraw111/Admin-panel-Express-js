const jwt = require("jsonwebtoken");

exports.verifyUser = (req, res, next) => {
  const token = req.cookies?.admin;
  if (!token) {
return     res.redirect("/login");
  }
  const verifyToken = jwt.verify(token, "mykey");
  if (!verifyToken) {
    return res.redirect("/login");
  }
  req.user = verifyToken;
  next();
};

exports.isUser = (req, res, next) => {
  const { role_id } = req.user;
  if (role_id === 0) {
    next();
  } else {
    res.json("you are not admin");
  }
};

exports.isAdmin = (req, res, next) => {
  const { role_id } = req.user;

  if (role_id === 1) {
    next();
  } else {
    res.json("you are not admin");
  }
};

