import DashboardHeader from "../components/admin/DashboardHeader";
import StatisticsCards from "../components/admin/StatisticsCards";
import SearchBar from "../components/admin/SearchBar";
import AttendanceFilter from "../components/admin/AttendanceFilter";
import RSVPTable from "../components/admin/RSVPTable";
import LoadingState from "../components/admin/LoadingState";
import ExportButton from "../components/admin/ExportButton";

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

  if (loading) {
    return (
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-14">
        <DashboardHeader />
        <LoadingState />
      </main>
    );
  }

  return (
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
      />
    </main>
  );
}

export default Admin;
