import { theme } from "../../styles/theme";

function StatCard({ title, value, icon, iconBackground = "#F8F5F2" }) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
        boxShadow: theme.shadow.card,
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-sm uppercase tracking-wider"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            {title}
          </p>

          <h2
            className="mt-4 text-5xl font-bold"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            {value}
          </h2>
        </div>

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            text-3xl
            transition-transform
            duration-300
            group-hover:scale-110
          "
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
