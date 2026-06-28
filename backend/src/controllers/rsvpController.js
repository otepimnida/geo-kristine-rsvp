const { submitRSVPService } = require("../services/rsvpService");

const submitRSVP = async (req, res, next) => {
  try {
    console.log("Request Body:", req.body);

    const data = await submitRSVPService(req.body);

    return res.status(200).json({
      success: true,
      message: "RSVP endpoint is working.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitRSVP,
};
