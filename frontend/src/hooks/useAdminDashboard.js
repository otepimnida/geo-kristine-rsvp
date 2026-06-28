import { useCallback, useEffect, useMemo, useState } from "react";

import { getAllRSVPs } from "../services/adminService";
import useAutoRefresh from "./useAutoRefresh";

function useAdminDashboard() {
  const [rsvps, setRSVPs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [attendance, setAttendance] = useState("All");

  const [lastUpdated, setLastUpdated] = useState(null);

  const loadRSVPs = useCallback(async () => {
    try {
      const data = await getAllRSVPs();

      setRSVPs(data);

      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to load RSVPs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRSVPs();
  }, [loadRSVPs]);

  // Refresh every 15 seconds
  useAutoRefresh(loadRSVPs, 15000);

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

    lastUpdated,

    refreshDashboard: loadRSVPs,
  };
}

export default useAdminDashboard;
