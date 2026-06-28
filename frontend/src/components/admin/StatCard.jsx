import { theme } from "../../styles/theme";

function StatCard({ title, value }) {
  return (
    <div
      className="rounded-3xl border p-6 text-center"
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
        boxShadow: theme.shadow.card,
      }}
    >
      <p
        className="text-sm uppercase tracking-widest"
        style={{
          color: theme.colors.secondary,
          fontFamily: theme.fonts.body,
        }}
      >
        {title}
      </p>

      <h2
        className="mt-4 text-4xl"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.heading,
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default StatCard;
