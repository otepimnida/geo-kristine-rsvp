import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import api from "../services/api";

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

  const { reset, setError } = methods;

  const onSubmit = async (formData) => {
    try {
      const response = await api.post("/rsvp", formData);

      if (response.data.success) {
        await Swal.fire({
          icon: "success",
          title: "RSVP Submitted",
          text: response.data.message,
          confirmButtonColor: "#010048",
        });

        reset();
      }
    } catch (error) {
      if (error.response) {
        await Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: error.response.data.message || "Unable to submit your RSVP.",
          confirmButtonColor: "#010048",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Server Error",
          text: "Unable to connect to the server.",
          confirmButtonColor: "#010048",
        });
      }

      console.error(error);
    }
  };

  return {
    methods,
    onSubmit,
  };
}

export default useRSVPForm;
