import RSVPInput from "./RSVPInput";
import AttendanceRadio from "./AttendanceRadio";
import GuestCounter from "./GuestCounter";
import MessageTextarea from "./MessageTextarea";
import Button from "../ui/Button";

import { theme } from "../../styles/theme";

function RSVPForm() {
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

      <div className="space-y-8">
        <RSVPInput />

        <AttendanceRadio />

        <GuestCounter />

        <MessageTextarea />

        <div className="pt-4">
          <Button className="w-full">Submit RSVP</Button>
        </div>
      </div>
    </section>
  );
}

export default RSVPForm;
