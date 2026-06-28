import { useFormContext } from "react-hook-form";

import Textarea from "../ui/Textarea";

function MessageTextarea() {
  const { register } = useFormContext();

  return (
    <Textarea
      label="Message for the Couple"
      placeholder="Write your heartfelt message here..."
      {...register("message")}
    />
  );
}

export default MessageTextarea;
