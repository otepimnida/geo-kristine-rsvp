const express = require("express");

const router = express.Router();

const {
  getDashboardRSVPs,
  updateDashboardRSVP,
} = require("../controllers/adminController");

router.get("/rsvps", getDashboardRSVPs);

router.put("/rsvps/:id", updateDashboardRSVP);

module.exports = router;
