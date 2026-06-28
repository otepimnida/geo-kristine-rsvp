import { theme } from "../../styles/theme";
import { formatDate } from "../../utils/formatDate";

function RSVPTableRow({
  index,
  fullName,
  attendance,
  guestCount,
  message,
  createdAt,
}) {
  const attending = attendance === "Yes, Joyfully!";

  return (
    <tr
      className={`
        transition-colors
        duration-200
        hover:bg-slate-100
        ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
      `}
    >
      <td className="px-6 py-4 font-medium whitespace-nowrap">{fullName}</td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`
            inline-flex
            rounded-full
            px-4
            py-1.5
            text-xs
            font-semibold
            ${
              attending
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {attendance}
        </span>
      </td>

      <td className="px-6 py-4 text-center">{guestCount}</td>

      <td className="px-6 py-4 max-w-xs truncate" title={message}>
        {message || "-"}
      </td>

      <td
        className="px-6 py-4 whitespace-nowrap"
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
