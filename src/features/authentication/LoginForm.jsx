import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Row from "../../ui/Row";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventdefault();
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
          />
        </Row>
        <Row>
          <Button size="large">Login</Button>
        </Row>
      </Row>
    </Form>
  );
}

export default LoginForm;
