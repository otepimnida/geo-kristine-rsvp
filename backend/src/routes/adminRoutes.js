const express = require("express");

const router = express.Router();

const {
  getDashboardRSVPs,
  updateDashboardRSVP,
  deleteDashboardRSVP,
} = require("../controllers/adminController");

router.get("/rsvps", getDashboardRSVPs);

router.put("/rsvps/:id", updateDashboardRSVP);

router.delete("/rsvps/:id", deleteDashboardRSVP);

module.exports = router;
