import { AnimatePresence, motion } from "framer-motion";
import {
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaCommentDots,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";

import { theme } from "../../styles/theme";

function RSVPDetailsModal({ open, guest, onClose, onEdit, onDelete }) {
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
          className="w-full max-w-2xl rounded-3xl p-8 shadow-2xl"
          style={{
            background: theme.colors.background,
          }}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
        >
          <h2
            className="mb-8 text-center text-4xl"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            RSVP Details
          </h2>

          <div className="space-y-6">
            <InfoRow
              icon={<FaUser />}
              label="Guest Name"
              value={guest.fullName}
            />

            <InfoRow
              icon={
                guest.attendance === "Yes, Joyfully!" ? (
                  <FaCheckCircle />
                ) : (
                  <FaTimesCircle />
                )
              }
              label="Attendance"
              value={guest.attendance}
            />

            <InfoRow
              icon={<FaUsers />}
              label="Guests"
              value={guest.guestCount}
            />

            <InfoRow
              icon={<FaCommentDots />}
              label="Message"
              value={guest.message || "-"}
            />

            <InfoRow
              icon={<FaCalendarAlt />}
              label="Date Submitted"
              value={new Date(guest.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          </div>

          <div className="mt-10 flex justify-end gap-4">
            <button
              onClick={() => onDelete(guest)}
              className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
            >
              <FaTrashAlt />
              Delete RSVP
            </button>

            <button
              onClick={() => onEdit(guest)}
              className="flex items-center gap-2 rounded-xl border px-5 py-3 transition"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
              }}
            >
              <FaEdit />
              Edit RSVP
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
    <div className="flex gap-5 rounded-2xl border p-5">
      <div
        className="mt-1 text-xl"
        style={{
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
          className="mt-1 text-lg font-medium"
          style={{
            color: theme.colors.primary,
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default RSVPDetailsModal;
