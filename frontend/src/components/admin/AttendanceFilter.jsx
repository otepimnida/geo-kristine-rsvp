import { theme } from "../../styles/theme";

function AttendanceFilter() {
  return (
    <div className="mb-10">
      <label
        className="mb-2 block text-sm font-medium"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.body,
        }}
      >
        Attendance
      </label>

      <select
        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
        style={{
          borderColor: theme.colors.border,
        }}
      >
        <option>All Guests</option>
        <option>Yes, Joyfully!</option>
        <option>Regretfully, No</option>
      </select>
    </div>
  );
}

export default AttendanceFilter;
