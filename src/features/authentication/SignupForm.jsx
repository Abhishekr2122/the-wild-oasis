import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

// Email regex: /\S+@\S+\.\S+/

const Paragraph = styled.p`
  color: red;
  width: auto;
  height: auto;
`;

function SignupForm() {
  const { register, formState } = useForm();
  const { errors } = formState;
  return (
    <Form>
      <FormRow>
        <label>
          <strong>Full Name</strong>
        </label>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
        <Paragraph>hi</Paragraph>
      </FormRow>

      <FormRow>
        <label>
          <strong>Email address</strong>
        </label>
        <Input
          type="email"
          id="email"
          {...register("email", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <label>
          <strong>password (min 8 characters)</strong>
        </label>
        <Input
          type="password"
          id="password"
          {...register("password", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <label>
          <strong>Repeat password</strong>
        </label>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
