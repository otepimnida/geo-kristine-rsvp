import { theme } from "../../styles/theme";

function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 block text-sm font-medium"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.body,
        }}
      >
        Search Guest
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by guest name..."
        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
        style={{
          borderColor: theme.colors.border,
        }}
      />
    </div>
  );
}

export default SearchBar;
