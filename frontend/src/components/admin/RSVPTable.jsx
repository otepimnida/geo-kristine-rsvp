import RSVPTableHeader from "./RSVPTableHeader";
import RSVPTableRow from "./RSVPTableRow";

function RSVPTable({ rsvps }) {
  return (
    <div className="overflow-hidden rounded-3xl border">
      <table className="w-full border-collapse">
        <RSVPTableHeader />

        <tbody>
          {rsvps.map((guest) => (
            <RSVPTableRow key={guest.id} {...guest} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RSVPTable;
