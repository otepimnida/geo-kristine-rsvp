import { FormProvider } from "react-hook-form";

import RSVPInput from "./RSVPInput";
import AttendanceRadio from "./AttendanceRadio";
import GuestCounter from "./GuestCounter";
import MessageTextarea from "./MessageTextarea";

import Button from "../ui/Button";

import useRSVPForm from "../../hooks/useRSVPForm";

import { theme } from "../../styles/theme";

function RSVPForm() {
  const { methods, onSubmit } = useRSVPForm();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <section
      className="rounded-3xl border p-10"
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
        boxShadow: theme.shadow.card,
      }}
    >
      <h1
        className="mb-2 text-center text-5xl"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.heading,
        }}
      >
        RSVP
      </h1>

      <p
        className="mb-10 text-center"
        style={{
          color: theme.colors.secondary,
          fontFamily: theme.fonts.body,
        }}
      >
        We'd be honored to celebrate with you.
      </p>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <RSVPInput />

          <AttendanceRadio />

          <GuestCounter />

          <MessageTextarea />

          <Button type="submit" className="w-full">
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </Button>
        </form>
      </FormProvider>
    </section>
  );
}

export default RSVPForm;
