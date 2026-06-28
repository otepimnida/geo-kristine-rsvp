import { theme } from "../../styles/theme";

function Textarea({ label, placeholder, value, onChange }) {
  return (
    <div className="space-y-2">
      <label
        className="block text-sm font-medium"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.body,
        }}
      >
        {label}
      </label>

      <textarea
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2 resize-none"
        style={{
          borderColor: theme.colors.border,
        }}
      />
    </div>
  );
}

export default Textarea;
