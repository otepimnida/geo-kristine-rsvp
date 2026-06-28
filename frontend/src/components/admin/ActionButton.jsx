import { motion } from "framer-motion";
import { theme } from "../../styles/theme";

function ActionButton({ icon, label, onClick, variant = "primary" }) {
  const variants = {
    primary: {
      background: theme.colors.primary,
      color: "#FFFFFF",
    },

    secondary: {
      background: "#F8F5F2",
      color: theme.colors.primary,
    },

    danger: {
      background: "#FEE2E2",
      color: "#DC2626",
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-4
        py-2
        text-sm
        font-medium
        transition-all
      "
      style={variants[variant]}
    >
      {icon}

      {label && <span>{label}</span>}
    </motion.button>
  );
}

export default ActionButton;
