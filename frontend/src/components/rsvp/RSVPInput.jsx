import { useFormContext } from "react-hook-form";

import Input from "../ui/Input";

function RSVPInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      label="Full Name"
      placeholder="Enter your full name"
      error={errors.fullName?.message}
      {...register("fullName", {
        required: "Full name is required.",
        minLength: {
          value: 3,
          message: "Please enter your complete name.",
        },
      })}
    />
  );
}

export default RSVPInput;
