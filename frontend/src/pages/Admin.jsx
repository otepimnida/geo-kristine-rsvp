import DashboardHeader from "../components/admin/DashboardHeader";
import StatisticsCards from "../components/admin/StatisticsCards";
import SearchBar from "../components/admin/SearchBar";
import AttendanceFilter from "../components/admin/AttendanceFilter";
import RSVPTable from "../components/admin/RSVPTable";
import LoadingState from "../components/admin/LoadingState";
import EmptyState from "../components/admin/EmptyState";

import useAdminDashboard from "../hooks/useAdminDashboard";

function Admin() {
  const { rsvps, statistics, loading } = useAdminDashboard();

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

      {rsvps.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <SearchBar />
          <AttendanceFilter />
          <RSVPTable rsvps={rsvps} />
        </>
      )}
    </main>
  );
}

export default Admin;
