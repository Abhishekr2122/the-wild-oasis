import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.main`
  background-color: lightgrey;
`;
export default function App() {
  return (
    <>
      <StyledApp>
        <GlobalStyles />
        <H1>The Wild Oasis</H1>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input placeholder="Number of guests" type="number" />
      </StyledApp>
    </>
  );
}
