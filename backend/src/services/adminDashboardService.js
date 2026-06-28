const supabase = require("../config/supabase");

async function getAllRSVPs() {
  const { data, error } = await supabase
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  // Convert database column names to frontend-friendly property names
  return data.map((rsvp) => ({
    id: rsvp.id,
    fullName: rsvp.full_name,
    attendance: rsvp.attendance,
    guestCount: rsvp.guest_count,
    message: rsvp.message,
    createdAt: rsvp.created_at,
  }));
}

module.exports = {
  getAllRSVPs,
};
