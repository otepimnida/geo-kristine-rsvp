const supabase = require("../config/supabase");

const createRSVP = async (rsvpData) => {
  const { data, error } = await supabase
    .from("rsvps")
    .insert({
      full_name: rsvpData.fullName,
      attendance: rsvpData.attendance,
      guest_count: rsvpData.guestCount,
      message: rsvpData.message,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return {
    id: data.id,
    fullName: data.full_name,
    attendance: data.attendance,
    guestCount: data.guest_count,
    message: data.message,
    createdAt: data.created_at,
  };
};

module.exports = {
  createRSVP,
};
