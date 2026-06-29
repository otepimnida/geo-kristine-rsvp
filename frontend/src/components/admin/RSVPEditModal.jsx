import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import { theme } from "../../styles/theme";

function RSVPEditModal({ open, guest, onClose, onSave }) {
  const [formData, setFormData] = useState({
    fullName: "",
    attendance: "Yes, Joyfully!",
    guestCount: 1,
    message: "",
  });

  useEffect(() => {
    if (guest) {
      setFormData({
        fullName: guest.fullName,
        attendance: guest.attendance,
        guestCount: guest.guestCount,
        message: guest.message || "",
      });
    }
  }, [guest]);

  if (!open || !guest) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "guestCount" ? Number(value) : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...guest,
      ...formData,
    });
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.form
          onSubmit={handleSubmit}
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
          className="w-full max-w-xl rounded-3xl p-8"
          style={{
            background: theme.colors.background,
          }}
        >
          <div className="mb-8 flex items-center justify-between">
            <h2
              className="text-3xl"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              Edit RSVP
            </h2>

            <button type="button" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block">Full Name</label>

              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block">Attendance</label>

              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              >
                <option>Yes, Joyfully!</option>

                <option>Regretfully, No</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block">Guests</label>

              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block">Message</label>

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-6 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl px-6 py-3 text-white"
              style={{
                background: theme.colors.primary,
              }}
            >
              Save Changes
            </button>
          </div>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
}

export default RSVPEditModal;
