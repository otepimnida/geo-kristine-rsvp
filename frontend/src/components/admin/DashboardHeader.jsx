import { theme } from "../../styles/theme";

function DashboardHeader({ lastUpdated }) {
  const formattedTime = lastUpdated
    ? lastUpdated.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "--:--:--";

  return (
    <header className="mb-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p
            className="mb-2 uppercase tracking-[0.35em] text-sm"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            Geo & Kristine
          </p>

          <h1
            className="text-5xl"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            RSVP Dashboard
          </h1>

          <p
            className="mt-4"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            Manage guest responses for your wedding celebration.
          </p>
        </div>

        <div
          className="rounded-2xl border px-6 py-4 text-center"
          style={{
            borderColor: theme.colors.border,
            background: theme.colors.background,
            boxShadow: theme.shadow.card,
          }}
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

            <span
              className="font-semibold"
              style={{
                color: "#16A34A",
                fontFamily: theme.fonts.body,
              }}
            >
              Auto Refresh Enabled
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
            className="mt-1 text-lg font-semibold"
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
