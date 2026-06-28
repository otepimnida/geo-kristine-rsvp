import DashboardHeader from "../components/admin/DashboardHeader";
import StatisticsCards from "../components/admin/StatisticsCards";
import SearchBar from "../components/admin/SearchBar";
import AttendanceFilter from "../components/admin/AttendanceFilter";
import RSVPTable from "../components/admin/RSVPTable";
import LoadingState from "../components/admin/LoadingState";

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
      <DashboardHeader />

      <StatisticsCards statistics={statistics} />

      <SearchBar value={search} onChange={setSearch} />

      <AttendanceFilter value={attendance} onChange={setAttendance} />

      <RSVPTable
        rsvps={filteredRSVPs}
        hasFilters={search.trim() !== "" || attendance !== "All"}
      />
    </main>
  );
}

export default Admin;
