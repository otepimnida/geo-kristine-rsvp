import { motion } from "framer-motion";

function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full bg-[#010048] px-10 py-4 text-white transition ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
