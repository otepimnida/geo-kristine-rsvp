import { useFormContext } from "react-hook-form";

import { theme } from "../../styles/theme";

function GuestCounter() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const guestCount = watch("guestCount");

  const increase = () => {
    if (guestCount < 10) {
      setValue("guestCount", guestCount + 1, {
        shouldValidate: true,
      });
    }
  };

  const decrease = () => {
    if (guestCount > 1) {
      setValue("guestCount", guestCount - 1, {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="space-y-3">
      <label
        className="block text-sm font-medium"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.body,
        }}
      >
        Number of Guests
      </label>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={decrease}
          className="flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition hover:scale-105"
          style={{
            borderColor: theme.colors.border,
          }}
        >
          −
        </button>

        <div
          className="flex h-12 w-20 items-center justify-center rounded-xl border text-lg font-semibold"
          style={{
            borderColor: theme.colors.border,
            color: theme.colors.primary,
          }}
        >
          {guestCount}
        </div>

        <button
          type="button"
          onClick={increase}
          className="flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition hover:scale-105"
          style={{
            borderColor: theme.colors.border,
          }}
        >
          +
        </button>
      </div>

      {errors.guestCount && (
        <p className="text-center text-sm text-red-500">
          {errors.guestCount.message}
        </p>
      )}
    </div>
  );
}

export default GuestCounter;
