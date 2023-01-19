// creating the middleware for the authentication
const jwt = require("jsonwebtoken");
const hasAuth = (req, res, next) => {
  try {
    const authToken = req.header("authToken");
    if (!authToken) {
      res.status(404).json({ success: false, err: "Please authenticate with valid user" });
    } else {
      // verifying the token
      const data = jwt.verify(authToken, process.env.JWT_SECRET);
      req.user = data;
      next();
    }
  } catch (err) {
    res.status(404).json({ success: false, err: "Authentication failed" });
  }
};

module.exports = hasAuth;
