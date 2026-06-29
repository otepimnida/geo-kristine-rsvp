import { AnimatePresence, motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

import { theme } from "../../styles/theme";

function DeleteConfirmationModal({
  open,
  guest,
  onCancel,
  onConfirm,
}) {
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
          className="w-full max-w-md rounded-3xl p-8 shadow-2xl"
          style={{
            background: theme.colors.background,
          }}
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
          }}
        >
          <div className="mb-6 flex justify-center">
            <div
              className="rounded-full p-5"
              style={{
                background: "#FEE2E2",
              }}
            >
              <FaTrashAlt
                size={34}
                color="#DC2626"
              />
            </div>
          </div>

          <h2
            className="text-center text-3xl"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            Delete RSVP
          </h2>

          <p
            className="mt-5 text-center leading-7"
            style={{
              color: theme.colors.secondary,
            }}
          >
            Are you sure you want to permanently delete the RSVP of
          </p>

          <p
            className="mt-2 text-center text-xl font-semibold"
            style={{
              color: theme.colors.primary,
            }}
          >
            {guest.fullName}
          </p>

          <p
            className="mt-6 text-center text-sm"
            style={{
              color: "#DC2626",
            }}
          >
            This action cannot be undone.
          </p>

          <div className="mt-10 flex justify-end gap-4">
            <button
              onClick={onCancel}
              className="rounded-xl border px-6 py-3 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={() => onConfirm(guest)}
              className="rounded-xl bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
            >
              Delete RSVP
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DeleteConfirmationModal;
