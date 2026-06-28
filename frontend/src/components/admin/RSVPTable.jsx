import RSVPTableHeader from "./RSVPTableHeader";
import RSVPTableRow from "./RSVPTableRow";
import EmptyState from "./EmptyState";

function RSVPTable({ rsvps, hasFilters, onViewGuest }) {
  if (rsvps.length === 0) {
    if (hasFilters) {
      return (
        <EmptyState
          icon="🔍"
          title="No Guests Found"
          message="Try another search or change the attendance filter."
        />
      );
    }

    return <EmptyState />;
  }

  return (
    <div
      className="
        overflow-x-auto
        rounded-3xl
        border
        bg-white
        shadow-sm
      "
    >
      <table className="min-w-full border-collapse">
        <RSVPTableHeader />

        <tbody>
          {rsvps.map((guest, index) => (
            <RSVPTableRow
              key={guest.id}
              index={index}
              {...guest}
              onView={() => onViewGuest(guest)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RSVPTable;
