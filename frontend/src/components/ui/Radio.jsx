import { forwardRef } from "react";
import { theme } from "../../styles/theme";

const Radio = forwardRef(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className="space-y-1">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          ref={ref}
          type="radio"
          {...props}
          className={`h-4 w-4 accent-blue-900 ${className}`}
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

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

Radio.displayName = "Radio";

export default Radio;
