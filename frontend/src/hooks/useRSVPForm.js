import { useForm } from "react-hook-form";

function useRSVPForm() {
  const methods = useForm({
    defaultValues: {
      fullName: "",
      attendance: "",
      guestCount: 1,
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log("RSVP Data:", data);

    // Backend API will be connected in the next milestone.

    methods.reset();
  };

  return {
    methods,
    onSubmit,
  };
}

export default useRSVPForm;
