import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportRSVPsToExcel(rsvps) {
  if (!rsvps || rsvps.length === 0) {
    alert("There are no RSVP records to export.");
    return;
  }

  const worksheetData = rsvps.map((guest) => ({
    "Guest Name": guest.fullName,
    Attendance: guest.attendance,
    "Number of Guests": guest.guestCount,
    Message: guest.message || "-",
    "Date Submitted": new Date(guest.createdAt).toLocaleDateString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(worksheetData);

  worksheet["!cols"] = [
    { wch: 30 },
    { wch: 22 },
    { wch: 18 },
    { wch: 50 },
    { wch: 20 },
  ];

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "RSVPs");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const today = new Date().toISOString().split("T")[0];

  saveAs(file, `Geo_Kristine_RSVPs_${today}.xlsx`);
}
