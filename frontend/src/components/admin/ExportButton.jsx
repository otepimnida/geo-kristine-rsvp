import { FaFileExcel } from "react-icons/fa";

import { exportRSVPsToExcel } from "../../services/exportService";

import { theme } from "../../styles/theme";

function ExportButton({ rsvps }) {
  return (
    <button
      onClick={() => exportRSVPsToExcel(rsvps)}
      className="
        flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        px-6
        py-3
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-lg
      "
      style={{
        background: theme.colors.primary,
        color: "#FFFFFF",
      }}
    >
      <FaFileExcel size={20} />

      <span className="font-medium">Export RSVP Report</span>
    </button>
  );
}

export default ExportButton;
