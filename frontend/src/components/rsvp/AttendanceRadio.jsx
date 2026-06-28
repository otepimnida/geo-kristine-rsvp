import Radio from "../ui/Radio";

function AttendanceRadio() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-slate-700">Will you attend?</h3>

      <div className="space-y-3">
        <Radio name="attendance" label="Yes, Joyfully!" value="yes" />

        <Radio name="attendance" label="Regretfully, No" value="no" />
      </div>
    </div>
  );
}

export default AttendanceRadio;
