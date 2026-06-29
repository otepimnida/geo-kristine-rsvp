const express = require("express");
const cors = require("cors");

const rsvpRoutes = require("./routes/rsvpRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Geo & Kristine RSVP API is running.",
  });
});

app.use("/api/rsvp", rsvpRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/auth", authRoutes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
