const {
  getAllRSVPs,
  updateRSVP,
} = require("../services/adminDashboardService");

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

async function updateDashboardRSVP(req, res, next) {
  try {
    const { id } = req.params;

    const updatedRSVP = await updateRSVP(id, req.body);

    res.status(200).json({
      success: true,
      message: "RSVP updated successfully.",
      data: updatedRSVP,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDashboardRSVPs,
  updateDashboardRSVP,
};
