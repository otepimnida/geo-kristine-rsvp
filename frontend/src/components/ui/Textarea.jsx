import { forwardRef } from "react";
import { theme } from "../../styles/theme";

const Textarea = forwardRef(
  ({ label, placeholder = "", error, ...props }, ref) => {
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
          ref={ref}
          rows={5}
          placeholder={placeholder}
          {...props}
          className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2 ${
            error ? "border-red-500" : ""
          }`}
          style={{
            borderColor: error ? "#ef4444" : theme.colors.border,
          }}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
