import { motion } from "framer-motion";

import { theme } from "../../styles/theme";

function Button({ children, type = "button", onClick, className = "" }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full px-10 py-4 text-lg font-medium transition-all ${className}`}
      style={{
        background: theme.colors.primary,
        color: theme.colors.background,
        fontFamily: theme.fonts.body,
        boxShadow: theme.shadow.card,
      }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
