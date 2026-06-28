import { theme } from "../../styles/theme";

function EmptyState() {
  return (
    <div
      className="rounded-3xl border py-20 text-center"
      style={{
        borderColor: theme.colors.border,
        background: theme.colors.background,
        boxShadow: theme.shadow.card,
      }}
    >
      <div className="text-6xl mb-4">💌</div>

      <h2
        className="text-3xl"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.heading,
        }}
      >
        No RSVP Submissions Yet
      </h2>

      <p
        className="mt-4"
        style={{
          color: theme.colors.secondary,
          fontFamily: theme.fonts.body,
        }}
      >
        Once your guests begin responding, their RSVP submissions will appear
        here.
      </p>
    </div>
  );
}

export default EmptyState;
