import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";

function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1">
      <label
        className="mb-2 block text-sm font-semibold"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.body,
        }}
      >
        Search Guest
      </label>

      <div className="relative">
        <FaSearch
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{
            color: theme.colors.secondary,
          }}
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by guest name..."
          className="
            w-full
            rounded-2xl
            border
            py-3
            pl-11
            pr-4
            outline-none
            transition-all
            focus:ring-2
          "
          style={{
            borderColor: theme.colors.border,
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
