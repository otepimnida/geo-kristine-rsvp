import { useFormContext } from "react-hook-form";

import Input from "../ui/Input";

function GuestCounter() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      type="number"
      label="Number of Guests"
      error={errors.guestCount?.message}
      {...register("guestCount", {
        required: "Please enter the number of guests.",
        valueAsNumber: true,
        min: {
          value: 1,
          message: "Minimum is 1 guest.",
        },
        max: {
          value: 10,
          message: "Maximum is 10 guests.",
        },
      })}
    />
  );
}

export default GuestCounter;
