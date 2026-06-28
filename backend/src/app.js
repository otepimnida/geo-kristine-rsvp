const express = require("express");
const cors = require("cors");

const rsvpRoutes = require("./routes/rsvpRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/rsvp", rsvpRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Geo & Kristine RSVP API is running.",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
