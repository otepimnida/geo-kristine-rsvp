const { submitRSVPService } = require("../services/rsvpService");

const submitRSVP = async (req, res, next) => {
  try {
    const data = await submitRSVPService(req.body);

    return res.status(201).json({
      success: true,
      message:
        "Your RSVP has been submitted successfully. We can't wait to celebrate with you!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitRSVP,
};
