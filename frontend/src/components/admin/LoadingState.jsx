import { theme } from "../../styles/theme";

function LoadingState() {
  return (
    <div
      className="rounded-3xl border py-16 text-center"
      style={{
        borderColor: theme.colors.border,
      }}
    >
      <h2
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.heading,
        }}
      >
        Loading RSVPs...
      </h2>

      <p
        className="mt-3"
        style={{
          color: theme.colors.secondary,
          fontFamily: theme.fonts.body,
        }}
      >
        Please wait while we retrieve guest responses.
      </p>
    </div>
  );
}

export default LoadingState;
