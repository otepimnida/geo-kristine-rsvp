import { useState } from "react";
import toast from "react-hot-toast";

import DashboardHeader from "../components/admin/DashboardHeader";
import StatisticsCards from "../components/admin/StatisticsCards";
import SearchBar from "../components/admin/SearchBar";
import AttendanceFilter from "../components/admin/AttendanceFilter";
import RSVPTable from "../components/admin/RSVPTable";
import LoadingState from "../components/admin/LoadingState";
import ExportButton from "../components/admin/ExportButton";
import RSVPDetailsModal from "../components/admin/RSVPDetailsModal";
import RSVPEditModal from "../components/admin/RSVPEditModal";
import DeleteConfirmationModal from "../components/admin/DeleteConfirmationModal";

import useAdminDashboard from "../hooks/useAdminDashboard";

import { updateRSVP, deleteRSVP } from "../services/adminService";

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
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  function closeAllModals() {
    setIsDetailsOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
    setSelectedGuest(null);
  }

  function handleViewGuest(guest) {
    setSelectedGuest(guest);
    setIsDetailsOpen(true);
  }

  function handleCloseModal() {
    closeAllModals();
  }

  function handleEditGuest(guest) {
    setSelectedGuest(guest);
    setIsDetailsOpen(false);
    setIsEditOpen(true);
  }

  async function handleSaveGuest(updatedGuest) {
    try {
      await updateRSVP(updatedGuest.id, updatedGuest);

      toast.success("RSVP updated successfully!");

      await refreshDashboard();

      closeAllModals();
    } catch (error) {
      console.error(error);

      toast.error("Failed to update RSVP.");
    }
  }

  function handleDeleteGuest(guest) {
    setSelectedGuest(guest);
    setIsDetailsOpen(false);
    setIsDeleteOpen(true);
  }

  async function handleConfirmDelete(guest) {
    try {
      await deleteRSVP(guest.id);

      toast.success("RSVP deleted successfully!");

      await refreshDashboard();

      closeAllModals();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete RSVP.");
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
        onDelete={handleDeleteGuest}
      />

      <RSVPEditModal
        open={isEditOpen}
        guest={selectedGuest}
        onClose={closeAllModals}
        onSave={handleSaveGuest}
      />

      <DeleteConfirmationModal
        open={isDeleteOpen}
        guest={selectedGuest}
        onCancel={closeAllModals}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default Admin;
