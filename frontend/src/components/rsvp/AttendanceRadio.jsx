import { useFormContext } from "react-hook-form";

import Radio from "../ui/Radio";

function AttendanceRadio() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const attendanceRegister = register("attendance", {
    required: "Please select your attendance.",
  });

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Will You Attend?</h3>

      <div className="space-y-3">
        <Radio
          label="Yes, Joyfully!"
          value="Yes, Joyfully!"
          {...attendanceRegister}
        />

        <Radio
          label="Regretfully, No"
          value="Regretfully, No"
          {...attendanceRegister}
        />
      </div>

      {errors.attendance && (
        <p className="text-sm text-red-500">{errors.attendance.message}</p>
      )}
    </div>
  );
}

export default AttendanceRadio;
