const { getAllRSVPs } = require("../services/adminDashboardService");

async function getDashboardRSVPs(req, res, next) {
  try {
    const rsvps = await getAllRSVPs();

    res.status(200).json({
      success: true,
      data: rsvps,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDashboardRSVPs,
};
