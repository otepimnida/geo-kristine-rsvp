import { theme } from "../../styles/theme";

function StatCard({ title, value, icon, iconBackground = "#EEF2FF" }) {
  return (
    <div
      className="
        rounded-3xl
        border
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
      style={{
        borderColor: theme.colors.border,
        background: theme.colors.background,
        boxShadow: theme.shadow.card,
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className="text-sm"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            {title}
          </p>

          <h2
            className="mt-3 text-4xl font-bold"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            {value}
          </h2>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{
            background: iconBackground,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
