import { theme } from "../../styles/theme";

function AttendanceFilter({ value, onChange }) {
  return (
    <div className="mb-8">
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
        style={{
          borderColor: theme.colors.border,
        }}
      >
        <option value="All">All Guests</option>

        <option value="Yes, Joyfully!">Yes, Joyfully!</option>

        <option value="Regretfully, No">Regretfully, No</option>
      </select>
    </div>
  );
}

export default AttendanceFilter;
