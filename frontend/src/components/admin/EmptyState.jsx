import { theme } from "../../styles/theme";

function EmptyState({
  icon = "💌",
  title = "No RSVP Submissions Yet",
  message = "Once your guests begin responding, their RSVP submissions will appear here.",
}) {
  return (
    <div
      className="rounded-3xl border py-20 text-center"
      style={{
        borderColor: theme.colors.border,
        background: theme.colors.background,
        boxShadow: theme.shadow.card,
      }}
    >
      <div className="mb-4 text-6xl">{icon}</div>

      <h2
        className="text-3xl"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.heading,
        }}
      >
        {title}
      </h2>

      <p
        className="mt-4"
        style={{
          color: theme.colors.secondary,
          fontFamily: theme.fonts.body,
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default EmptyState;
