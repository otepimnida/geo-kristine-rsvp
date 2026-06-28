import { FaEye } from "react-icons/fa";

import { theme } from "../../styles/theme";
import { formatDate } from "../../utils/formatDate";

import ActionButton from "./ActionButton";

function RSVPTableRow({
  index,
  fullName,
  attendance,
  guestCount,
  message,
  createdAt,
  onView,
}) {
  const attending = attendance === "Yes, Joyfully!";

  return (
    <tr
      className={`
        transition-all
        duration-200
        hover:bg-slate-100
        ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
      `}
    >
      <td className="px-6 py-5 font-medium whitespace-nowrap">{fullName}</td>

      <td className="px-6 py-5 whitespace-nowrap">
        <span
          className={`
            inline-flex
            items-center
            rounded-full
            px-4
            py-2
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

      <td className="px-6 py-5 text-center">{guestCount}</td>

      <td className="max-w-xs truncate px-6 py-5" title={message}>
        {message || "-"}
      </td>

      <td
        className="px-6 py-5 whitespace-nowrap"
        style={{
          color: theme.colors.secondary,
        }}
      >
        {formatDate(createdAt)}
      </td>

      <td className="px-6 py-5">
        <ActionButton
          icon={<FaEye />}
          label=""
          variant="secondary"
          onClick={onView}
        />
      </td>
    </tr>
  );
}

export default RSVPTableRow;
