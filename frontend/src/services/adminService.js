import api from "./api";

export async function getAllRSVPs() {
  const response = await api.get("/admin/rsvps");

  return response.data.data;
}
