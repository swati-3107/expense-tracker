const asyncHandler = require("express-async-handler");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../model/Auth");

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password, mobile } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: "Please provide a valid password" });
  }

  if (!name) {
    return res.status(400).json({ message: "Please provide a name" });
  }

  let result = await Auth.findOne({ email });
  if (result) {
    return res.status(400).json({ message: "Email already in use" });
  }

  result = await Auth.findOne({ mobile });
  if (result) {
    return res.status(400).json({ message: "Mobile number already in use" });
  }

  const hashpass = await bcrypt.hash(password, 10);
  await Auth.create({ ...req.body, password: hashpass });
  res.status(201).json({ message: "User registered successfully" });
});

exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  console.log(+username, password);
  console.log("Login attempt with:", { username, password });

  if (!username) {
    return res
      .status(400)
      .json({ message: "Please provide an email or mobile number" });
  }

  let result;

  if (validator.isEmail(username)) {
    result = await Auth.findOne({ email: username });
  } else if (validator.isMobilePhone(username, "any")) {
    console.log("triggerd monile");
    result = await Auth.findOne({ mobile: +username });
    console.log("Found user by mobile:", result);
  } else {
    return res
      .status(400)
      .json({ message: "Please provide a valid email or mobile number" });
  }

  if (!result) {
    return res.status(400).json({ message: "Email/Mobile not registered" });
  }

  const verify = await bcrypt.compare(password, result.password);
  if (!verify) {
    return res.status(400).json({ message: "Password not matched" });
  }

  const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, {
    expiresIn: "1d",
  });

  res.cookie("LogAuth", token, { httpOnly: true, maxAge: 3600000 * 6 });

  res.status(200).json({
    message: "User Login Success",
    result: {
      name: result.name,
      email: result.email,
      mobile: result.mobile,
    },
  });
});

exports.logout = asyncHandler(async (req, res) => {
  res.clearCookie("LogAuth");
  res.status(200).json({ message: "logout success" });
});
