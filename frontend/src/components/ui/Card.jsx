import { theme } from "../../styles/theme";

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border p-10 ${className}`}
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
        boxShadow: theme.shadow.card,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
