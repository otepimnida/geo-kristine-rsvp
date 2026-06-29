const express = require("express");

const router = express.Router();

const {
  getDashboardRSVPs,
  updateDashboardRSVP,
  deleteDashboardRSVP,
} = require("../controllers/adminController");

const { authenticateToken } = require("../middleware/authMiddleware");

router.get("/rsvps", authenticateToken, getDashboardRSVPs);

router.put("/rsvps/:id", authenticateToken, updateDashboardRSVP);

router.delete("/rsvps/:id", authenticateToken, deleteDashboardRSVP);

module.exports = router;
