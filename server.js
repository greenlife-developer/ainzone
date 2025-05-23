const dotenv = require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://inventory-software.onrender.com"],
//     credentials: true,
//   })
// );

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
// app.use("/api/business", businessRoute);

// --------------------------deployment on heroku------------------------------

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "/client/build")));

  //   app.get("/*", function (req, res) {
  //     res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  //   });
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
// start server
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//     console.log("MongoDB connected");
//     })
//   .catch((err) => console.log(err));
