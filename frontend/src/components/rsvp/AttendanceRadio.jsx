import { useFormContext } from "react-hook-form";

import Radio from "../ui/Radio";

function AttendanceRadio() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Will You Attend?</h3>

      <div className="space-y-3">
        <Radio
          label="Yes, Joyfully!"
          value="Yes, Joyfully!"
          error={errors.attendance?.message}
          {...register("attendance", {
            required: "Please select your attendance.",
          })}
        />

        <Radio
          label="Regretfully, No"
          value="Regretfully, No"
          {...register("attendance")}
        />
      </div>
    </div>
  );
}

export default AttendanceRadio;
