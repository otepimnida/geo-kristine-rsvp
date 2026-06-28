import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import { theme } from "../../styles/theme";
import { ROUTES } from "../../utils/constants";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center"
      >
        <p
          className="mb-4 tracking-[0.35em] uppercase"
          style={{
            color: theme.colors.secondary,
            fontFamily: theme.fonts.body,
          }}
        >
          Together with our families
        </p>

        <h1
          className="mb-2 text-6xl font-semibold md:text-7xl"
          style={{
            color: theme.colors.primary,
            fontFamily: theme.fonts.heading,
          }}
        >
          Geo
        </h1>

        <h2
          className="mb-2 text-3xl"
          style={{
            color: theme.colors.gold,
            fontFamily: theme.fonts.elegant,
          }}
        >
          &
        </h2>

        <h1
          className="mb-8 text-6xl font-semibold md:text-7xl"
          style={{
            color: theme.colors.primary,
            fontFamily: theme.fonts.heading,
          }}
        >
          Kristine Mae
        </h1>

        <p
          className="mb-10 text-lg"
          style={{
            color: theme.colors.secondary,
            fontFamily: theme.fonts.body,
          }}
        >
          Request the honor of your presence
        </p>

        <Button onClick={() => navigate(ROUTES.RSVP)}>
          Confirm Attendance
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
