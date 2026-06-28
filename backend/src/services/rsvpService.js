const { createRSVP } = require("../models/rsvpModel");

const submitRSVPService = async (rsvpData) => {
  const { fullName, attendance, guestCount, message } = rsvpData;

  if (!fullName?.trim()) {
    throw new Error("Full name is required.");
  }

  if (!attendance?.trim()) {
    throw new Error("Attendance selection is required.");
  }

  if (!guestCount || guestCount < 1) {
    throw new Error("Guest count must be at least 1.");
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
