import { theme } from "../../styles/theme";

function DashboardHeader() {
  return (
    <header className="mb-10 text-center">
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
    </header>
  );
}

export default DashboardHeader;
