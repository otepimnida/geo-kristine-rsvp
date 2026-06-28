import StatCard from "./StatCard";

import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";

import { LuPartyPopper } from "react-icons/lu";

function StatisticsCards({ statistics }) {
  return (
    <section className="mb-12">
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatCard
          title="Total RSVPs"
          value={statistics.totalRSVPs}
          icon={<FaUsers color="#4F46E5" />}
          iconBackground="#EEF2FF"
        />

        <StatCard
          title="Attending"
          value={statistics.attending}
          icon={<FaUserCheck color="#16A34A" />}
          iconBackground="#DCFCE7"
        />

        <StatCard
          title="Declined"
          value={statistics.declined}
          icon={<FaUserTimes color="#DC2626" />}
          iconBackground="#FEE2E2"
        />

        <StatCard
          title="Guests"
          value={statistics.totalGuests}
          icon={<LuPartyPopper color="#D97706" />}
          iconBackground="#FEF3C7"
        />
      </div>
    </section>
  );
}

export default StatisticsCards;
