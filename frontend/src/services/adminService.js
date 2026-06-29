import api from "./api";

function normalizeRSVP(rsvp) {
  return {
    id: rsvp.id,
    fullName: rsvp.full_name,
    attendance: rsvp.attendance,
    guestCount: rsvp.guest_count,
    message: rsvp.message,
    createdAt: rsvp.created_at,
  };
}

export async function getAllRSVPs() {
  const response = await api.get("/admin/rsvps");

  return response.data.data.map(normalizeRSVP);
}

export async function updateRSVP(id, rsvpData) {
  const response = await api.put(`/admin/rsvps/${id}`, {
    fullName: rsvpData.fullName,
    attendance: rsvpData.attendance,
    guestCount: rsvpData.guestCount,
    message: rsvpData.message,
  });

  return normalizeRSVP(response.data.data);
}

export async function deleteRSVP(id) {
  await api.delete(`/admin/rsvps/${id}`);

  return true;
}
