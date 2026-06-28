import { theme } from "../../styles/theme";

function RSVPTableHeader() {
  const headers = [
    "Guest Name",
    "Attendance",
    "Guests",
    "Message",
    "Date",
    "Actions",
  ];

  return (
    <thead
      className="sticky top-0 z-10"
      style={{
        background: "#F8FAFC",
      }}
    >
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            className="
              px-6
              py-5
              text-left
              text-sm
              font-semibold
              whitespace-nowrap
            "
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.body,
            }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default RSVPTableHeader;
