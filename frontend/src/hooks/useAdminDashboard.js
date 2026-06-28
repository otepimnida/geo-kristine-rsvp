import { useEffect, useMemo, useState } from "react";

import { getAllRSVPs } from "../services/adminService";

function useAdminDashboard() {
  const [rsvps, setRSVPs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [attendance, setAttendance] = useState("All");

  useEffect(() => {
    async function loadRSVPs() {
      try {
        const data = await getAllRSVPs();
        setRSVPs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadRSVPs();
  }, []);

  const filteredRSVPs = useMemo(() => {
    return rsvps.filter((guest) => {
      const matchesSearch = guest.fullName
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesAttendance =
        attendance === "All" || guest.attendance === attendance;

      return matchesSearch && matchesAttendance;
    });
  }, [rsvps, search, attendance]);

  const statistics = {
    totalRSVPs: rsvps.length,

    attending: rsvps.filter((guest) => guest.attendance === "Yes, Joyfully!")
      .length,

    declined: rsvps.filter((guest) => guest.attendance === "Regretfully, No")
      .length,

    totalGuests: rsvps.reduce((total, guest) => total + guest.guestCount, 0),
  };

  return {
    loading,
    statistics,

    search,
    setSearch,

    attendance,
    setAttendance,

    filteredRSVPs,
  };
}

export default useAdminDashboard;
