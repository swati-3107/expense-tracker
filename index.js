const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const protect = require("./middleware/protected");
const path = require("path");
require("dotenv").config({ path: "./.env" });

// middleware
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "https://expense-tracker-tii6.onrender.com",
    // origin: "http://localhost:4200",
    credentials: true,
  })
);

// Routes
app.use("/api", require("./routes/authRoute"));
app.use("/expense", protect, require("./routes/expenseRoute"));
app.use("/master", protect, require("./routes/masterRoute"));

app.use(express.static(path.join(__dirname, "dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.once("open", () => {
  console.log("mongo connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
  });
});
