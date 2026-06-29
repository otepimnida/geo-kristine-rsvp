import { useState } from "react";

import DashboardHeader from "../components/admin/DashboardHeader";
import StatisticsCards from "../components/admin/StatisticsCards";
import SearchBar from "../components/admin/SearchBar";
import AttendanceFilter from "../components/admin/AttendanceFilter";
import RSVPTable from "../components/admin/RSVPTable";
import LoadingState from "../components/admin/LoadingState";
import ExportButton from "../components/admin/ExportButton";
import RSVPDetailsModal from "../components/admin/RSVPDetailsModal";
import RSVPEditModal from "../components/admin/RSVPEditModal";
import useAdminDashboard from "../hooks/useAdminDashboard";
import { updateRSVP } from "../services/adminService";

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

    refreshDashboard,
  } = useAdminDashboard();

  const [selectedGuest, setSelectedGuest] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  function handleViewGuest(guest) {
    setSelectedGuest(guest);
    setIsDetailsOpen(true);
  }

  function handleCloseModal() {
    setIsDetailsOpen(false);
    setSelectedGuest(null);
  }

  function handleEditGuest(guest) {
    setSelectedGuest(guest);

    setIsDetailsOpen(false);

    setIsEditOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditOpen(false);

    setSelectedGuest(null);
  }

  async function handleSaveGuest(updatedGuest) {
    try {
      await updateRSVP(updatedGuest.id, updatedGuest);

      await refreshDashboard();

      setIsEditOpen(false);

      setSelectedGuest(null);
    } catch (error) {
      console.error("Failed to update RSVP:", error);
    }
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
        onEdit={handleEditGuest}
      />
      <RSVPEditModal
        open={isEditOpen}
        guest={selectedGuest}
        onClose={handleCloseEditModal}
        onSave={handleSaveGuest}
      />
    </>
  );
}

export default Admin;
