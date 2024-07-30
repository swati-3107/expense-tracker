const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Auth = require("../model/Auth");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.LogAuth;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = await Auth.findById(decoded.userId).select("-password");
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Not authorized, user not found" });
    }
    req.body.user = req.user._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
});

module.exports = protect;
