const { createRSVP } = require("../models/rsvpModel");
const AppError = require("../utils/AppError");

const submitRSVPService = async (rsvpData) => {
  const { fullName, attendance, guestCount, message } = rsvpData;

  const errors = {};

  // Full Name Validation
  if (!fullName?.trim()) {
    errors.fullName = "Full name is required.";
  }

  // Attendance Validation
  if (!attendance?.trim()) {
    errors.attendance = "Please select your attendance.";
  }

  // Guest Count Validation
  if (!guestCount || guestCount < 1) {
    errors.guestCount = "Guest count must be at least 1.";
  }

  // If there are validation errors
  if (Object.keys(errors).length > 0) {
    throw new AppError(400, "Please correct the highlighted fields.", errors);
  }

  const savedRSVP = await createRSVP({
    fullName,
    attendance,
    guestCount,
    message,
  });

  return savedRSVP;
};

module.exports = {
  submitRSVPService,
};
