import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
            color: "#687F9A",
            fontFamily: "Poppins",
          }}
        >
          Together with our families
        </p>

        <h1
          className="mb-2 text-6xl font-semibold md:text-7xl"
          style={{
            color: "#010048",
            fontFamily: "Cinzel",
          }}
        >
          Geo
        </h1>

        <h2
          className="mb-2 text-3xl"
          style={{
            color: "#D5AD36",
            fontFamily: "Cormorant Garamond",
          }}
        >
          &
        </h2>

        <h1
          className="mb-8 text-6xl font-semibold md:text-7xl"
          style={{
            color: "#010048",
            fontFamily: "Cinzel",
          }}
        >
          Kristine Mae
        </h1>

        <p
          className="mb-10 text-lg"
          style={{
            color: "#687F9A",
            fontFamily: "Poppins",
          }}
        >
          Request the honor of your presence
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => navigate("/rsvp")}
          className="rounded-full px-10 py-4 text-lg font-medium transition-all"
          style={{
            background: "#010048",
            color: "#FFFFFF",
          }}
        >
          Confirm Attendance
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
