const express = require("express");

const router = express.Router();

const { getDashboardRSVPs } = require("../controllers/adminController");

router.get("/rsvps", getDashboardRSVPs);

module.exports = router;
