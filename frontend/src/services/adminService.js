const sampleRSVPs = [
  {
    id: 1,
    fullName: "Geo",
    attendance: "Yes, Joyfully!",
    guestCount: 2,
    message: "Congratulations!",
    createdAt: "2026-06-28",
  },
  {
    id: 2,
    fullName: "Maria Santos",
    attendance: "Regretfully, No",
    guestCount: 1,
    message: "Best Wishes!",
    createdAt: "2026-06-27",
  },
];

export async function getAllRSVPs() {
  // Simulate an API request
  return Promise.resolve(sampleRSVPs);
}
