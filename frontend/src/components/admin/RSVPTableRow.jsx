import { theme } from "../../styles/theme";
import { formatDate } from "../../utils/formatDate";

function RSVPTableRow({
  fullName,
  attendance,
  guestCount,
  message,
  createdAt,
}) {
  const attending = attendance === "Yes, Joyfully!";

  return (
    <tr className="border-t">
      <td className="px-6 py-4">{fullName}</td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            attending
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {attendance}
        </span>
      </td>

      <td className="px-6 py-4">{guestCount}</td>

      <td className="px-6 py-4">{message || "-"}</td>

      <td
        className="px-6 py-4"
        style={{
          color: theme.colors.secondary,
        }}
      >
        {formatDate(createdAt)}
      </td>
    </tr>
  );
}

export default RSVPTableRow;
