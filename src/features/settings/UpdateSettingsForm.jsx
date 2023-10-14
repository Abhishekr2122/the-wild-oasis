import Spinner from "../../ui/Spinner";
import { useSettings } from "../../features/settings/useSettings";
import { useUpdateSettings } from "../../features/settings/useUpdateSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();

  const { mutate: updateSetting, isLoading: isUpdating } = useUpdateSettings();

  // return <Spinner />;
  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow>
        <label style={{ fontSize: "1.5rem" }}>
          <strong>Minimum nights/booking</strong>
        </label>
        <Input
          type="number"
          defaultValue={minBookingLength}
          onBlur={(e) => handleBlur(e, "minBookingLength")}
          disabled={isUpdating}
          id="min-nights"
        />
      </FormRow>
      <FormRow>
        <label style={{ fontSize: "1.5rem" }}>
          <strong>Maximun nights/booking</strong>
        </label>
        <Input
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, "maxBookingLength")}
          disabled={isUpdating}
          id="max-nights"
        />
      </FormRow>
      <FormRow>
        <label style={{ fontSize: "1.5rem" }}>
          <strong>Maximum guests/booking</strong>
        </label>
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
          id="max-guests"
        />
      </FormRow>
      <FormRow>
        <label style={{ fontSize: "1.5rem" }}>
          <strong>Breakfast price</strong>
        </label>
        <Input
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, "breakfastPrice")}
          disabled={isUpdating}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
