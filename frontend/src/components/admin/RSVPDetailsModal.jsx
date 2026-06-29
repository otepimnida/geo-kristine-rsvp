import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

import { theme } from "../../styles/theme";

function RSVPDetailsModal({ open, guest, onClose, onEdit }) {
  if (!open || !guest) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative w-full max-w-xl rounded-3xl border p-8"
          style={{
            background: theme.colors.background,
            borderColor: theme.colors.border,
            boxShadow: theme.shadow.card,
          }}
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="absolute right-6 top-6 transition hover:scale-110"
          >
            <FaTimes size={22} color={theme.colors.secondary} />
          </button>

          {/* Header */}

          <div className="mb-8 text-center">
            <MdCelebration
              size={42}
              style={{
                color: theme.colors.primary,
                margin: "0 auto",
              }}
            />

            <h2
              className="mt-3 text-3xl"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              RSVP Details
            </h2>

            <p
              className="mt-2"
              style={{
                color: theme.colors.secondary,
                fontFamily: theme.fonts.body,
              }}
            >
              Guest RSVP Information
            </p>
          </div>

          {/* Content */}

          <div className="space-y-6">
            <InfoRow
              icon={<FaUser />}
              label="Guest Name"
              value={guest.fullName}
            />

            <InfoRow
              icon={<MdCelebration />}
              label="Attendance"
              value={guest.attendance}
            />

            <InfoRow
              icon={<FaUsers />}
              label="Guests"
              value={guest.guestCount}
            />

            <InfoRow
              icon={<FaCalendarAlt />}
              label="Submitted"
              value={guest.createdAt}
            />

            <div>
              <p
                className="mb-2 font-semibold"
                style={{
                  color: theme.colors.primary,
                }}
              >
                Message
              </p>

              <div
                className="rounded-2xl border p-4"
                style={{
                  borderColor: theme.colors.border,
                }}
              >
                {guest.message || "No message provided."}
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="mt-10 flex justify-end gap-4">
            <button
              onClick={() => onEdit(guest)}
              className="rounded-xl border px-6 py-3 transition hover:bg-slate-100"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.primary,
              }}
            >
              ✏ Edit RSVP
            </button>

            <button
              onClick={onClose}
              className="rounded-xl px-6 py-3 text-white transition hover:opacity-90"
              style={{
                background: theme.colors.primary,
              }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="rounded-xl p-3"
        style={{
          background: "#F8F5F2",
          color: theme.colors.primary,
        }}
      >
        {icon}
      </div>

      <div>
        <p
          className="text-sm"
          style={{
            color: theme.colors.secondary,
          }}
        >
          {label}
        </p>

        <p
          className="mt-1 text-lg font-semibold"
          style={{
            color: theme.colors.primary,
          }}
        >
          {value || "-"}
        </p>
      </div>
    </div>
  );
}

export default RSVPDetailsModal;
