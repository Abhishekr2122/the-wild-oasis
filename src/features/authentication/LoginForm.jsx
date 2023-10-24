import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("abhi@example.com");
  const [password, setPassword] = useState("123456");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    login(
      { email, password },
      {
        onSettled: function () {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row type="vertical">
        <Row type="vertical">
          <label style={{ fontSize: "1.5rem" }}>
            <strong>Email address</strong>
          </label>
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </Row>
        <Row type="vertical">
          <label style={{ fontsize: "1.5rem" }}>
            <strong>password</strong>
          </label>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </Row>
        <Row>
          <Button size="large" disabled={isLoading}>
            {isLoading ? <SpinnerMini /> : "Log in"}
          </Button>
        </Row>
      </Row>
    </Form>
  );
}

export default LoginForm;
