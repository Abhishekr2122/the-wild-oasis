import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

const Paragraph = styled.p`
  color: red;
  width: auto;
  height: auto;
`;

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: function () {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <label>
          <strong>Full name</strong>
        </label>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
          disabled={isLoading}
        />
        <Paragraph>{errors?.fullName?.message}</Paragraph>
      </FormRow>

      <FormRow>
        <label>
          <strong>Email address</strong>
        </label>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isLoading}
        />
        <Paragraph>{errors?.email?.message}</Paragraph>
      </FormRow>

      <FormRow>
        <label>
          <strong>password (min 8 characters)</strong>
        </label>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isLoading}
        />
        <Paragraph>{errors?.password?.message}</Paragraph>
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
            validate: function (value) {
              if (value !== getValues().password) {
                return "Passwords need to match ";
              }
            },
          })}
          disabled={isLoading}
        />
        <Paragraph>{errors?.passwordConfirm?.message}</Paragraph>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
