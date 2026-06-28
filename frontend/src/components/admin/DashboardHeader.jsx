import { FaHeart } from "react-icons/fa";
import { theme } from "../../styles/theme";

function DashboardHeader({ lastUpdated }) {
  const formattedTime = lastUpdated
    ? lastUpdated.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "--:--";

  return (
    <header
      className="mb-12 rounded-3xl border p-8"
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
        boxShadow: theme.shadow.card,
      }}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <FaHeart
              style={{
                color: theme.colors.primary,
              }}
            />

            <p
              className="uppercase tracking-[0.35em] text-sm font-semibold"
              style={{
                color: theme.colors.secondary,
                fontFamily: theme.fonts.body,
              }}
            >
              Geo & Kristine
            </p>
          </div>

          <h1
            className="text-5xl font-semibold"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            RSVP Dashboard
          </h1>

          <p
            className="mt-4 max-w-2xl leading-7"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            Manage guest responses, monitor attendance, and export RSVP reports
            for your wedding celebration.
          </p>
        </div>

        {/* Right Side */}
        <div
          className="min-w-[220px] rounded-2xl border px-6 py-5"
          style={{
            borderColor: theme.colors.border,
            background: "#FFFFFF",
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

            <span
              className="font-semibold"
              style={{
                color: "#16A34A",
                fontFamily: theme.fonts.body,
              }}
            >
              Live Dashboard
            </span>
          </div>

          <p
            className="text-sm"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            Last Updated
          </p>

          <p
            className="mt-1 text-xl font-semibold"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            {formattedTime}
          </p>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
