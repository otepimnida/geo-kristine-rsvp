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

module.exports = {
  getAllRSVPs,
};
