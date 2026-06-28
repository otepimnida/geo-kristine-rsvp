import StatCard from "./StatCard";

function StatisticsCards({ statistics }) {
  return (
    <section className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Total RSVPs" value={statistics.totalRSVPs} />

      <StatCard title="Attending" value={statistics.attending} />

      <StatCard title="Declined" value={statistics.declined} />

      <StatCard title="Guests" value={statistics.totalGuests} />
    </section>
  );
}

export default StatisticsCards;
