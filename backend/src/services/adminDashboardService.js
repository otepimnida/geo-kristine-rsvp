const supabase = require("../config/supabase");

async function getAllRSVPs() {
  const { data, error } = await supabase
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

async function updateRSVP(id, updatedData) {
  const { data, error } = await supabase
    .from("rsvps")
    .update({
      full_name: updatedData.fullName,
      attendance: updatedData.attendance,
      guest_count: updatedData.guestCount,
      message: updatedData.message,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

async function deleteRSVP(id) {
  const { error } = await supabase.from("rsvps").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

module.exports = {
  getAllRSVPs,
  updateRSVP,
  deleteRSVP,
};
