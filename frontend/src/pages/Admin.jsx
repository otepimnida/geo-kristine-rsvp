import { useState } from "react";

import DashboardHeader from "../components/admin/DashboardHeader";
import StatisticsCards from "../components/admin/StatisticsCards";
import SearchBar from "../components/admin/SearchBar";
import AttendanceFilter from "../components/admin/AttendanceFilter";
import RSVPTable from "../components/admin/RSVPTable";
import LoadingState from "../components/admin/LoadingState";
import ExportButton from "../components/admin/ExportButton";
import RSVPDetailsModal from "../components/admin/RSVPDetailsModal";

import useAdminDashboard from "../hooks/useAdminDashboard";

function Admin() {
  const {
    loading,

    statistics,

    search,
    setSearch,

    attendance,
    setAttendance,

    filteredRSVPs,

    lastUpdated,
  } = useAdminDashboard();

  const [selectedGuest, setSelectedGuest] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function handleViewGuest(guest) {
    setSelectedGuest(guest);
    setIsDetailsOpen(true);
  }

  function handleCloseModal() {
    setIsDetailsOpen(false);
    setSelectedGuest(null);
  }

  if (loading) {
    return (
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-14">
        <DashboardHeader />
        <LoadingState />
      </main>
    );
  }

  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-14">
        <DashboardHeader lastUpdated={lastUpdated} />

        <StatisticsCards statistics={statistics} />

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />

            <AttendanceFilter value={attendance} onChange={setAttendance} />
          </div>

          <ExportButton rsvps={filteredRSVPs} />
        </div>

        <RSVPTable
          rsvps={filteredRSVPs}
          hasFilters={search.trim() !== "" || attendance !== "All"}
          onViewGuest={handleViewGuest}
        />
      </main>

      <RSVPDetailsModal
        open={isDetailsOpen}
        guest={selectedGuest}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Admin;
