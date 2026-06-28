import { FaFileExcel } from "react-icons/fa";

import { exportRSVPsToExcel } from "../../services/exportService";

function ExportButton({ rsvps }) {
  return (
    <button
      onClick={() => exportRSVPsToExcel(rsvps)}
      className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-green-600
        px-5
        py-3
        text-white
        transition-all
        hover:bg-green-700
      "
    >
      <FaFileExcel />
      Export Excel
    </button>
  );
}

export default ExportButton;
