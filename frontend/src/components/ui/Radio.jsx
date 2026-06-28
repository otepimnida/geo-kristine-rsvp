import { theme } from "../../styles/theme";

function Radio({ label, name, value, checked = false, onChange = () => {} }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-blue-900"
      />

      <span
        className="text-base"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.body,
        }}
      >
        {label}
      </span>
    </label>
  );
}

export default Radio;
