import { useEffect, useState } from "react";

import { getAllRSVPs } from "../services/adminService";

function useAdminDashboard() {
  const [rsvps, setRSVPs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRSVPs() {
      try {
        const data = await getAllRSVPs();

        setRSVPs(data);
      } catch (error) {
        console.error("Failed to load RSVPs:", error);
      } finally {
        setLoading(false);
      }
    }

    loadRSVPs();
  }, []);

  const statistics = {
    totalRSVPs: rsvps.length,

    attending: rsvps.filter((guest) => guest.attendance === "Yes, Joyfully!")
      .length,

    declined: rsvps.filter((guest) => guest.attendance === "Regretfully, No")
      .length,

    totalGuests: rsvps.reduce((total, guest) => total + guest.guestCount, 0),
  };

  return {
    rsvps,
    statistics,
    loading,
  };
}

export default useAdminDashboard;
