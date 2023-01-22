const express = require("express");
const UserRoute = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
UserRoute.get("", (req, res) => {
  res.send("user");
});


// post request for sign up
UserRoute.post("/signup", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      res
        .status(404)
        .json({ msg: "Password and Confirm password not matching" });
    } else {
      // creating salt
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(password, salt);
      const doesUserExit = await User.exists({ email });
      if(doesUserExit){
        res.status(404).json({ success: false, err: "user exists" });
      }else{
        const user = new User({ name, email, password: secPassword });
        const result = await user.save();
        res.status(203).json({ success: true, result });
      }
    }
  } catch (err) {
    
  }
});

//  post request for the login
UserRoute.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(404)
        .json({ success: false, err: "Login with correct credentials" });
    } else {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (!isCorrect) {
        res
          .status(404)
          .json({ success: false, err: "Login with correct credentials" });
      } else {
        const data = {
          id: user.id,
        };
        const jwtToken = jwt.sign(data, process.env.JWT_SECRET);
        res.status(203).json({ success: true, jwtToken });
      }
    }
  } catch (err) {
    res.status(404).json({ success: false, err: err.message });
  }
});

module.exports = UserRoute;
