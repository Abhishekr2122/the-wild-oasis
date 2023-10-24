import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${function (props) {
    return (
      props.as === "h1" &&
      css`
        font-size: 3rem;
        font-weight: 900;
      `
    );
  }}

  ${function (props) {
    return (
      props.as === "h2" &&
      css`
        font-size: 2rem;
        font-weight: 600;
      `
    );
  }}

  ${function (props) {
    return (
      props.as === "h3" &&
      css`
        font-size: 2rem;
        font-weight: 500;
      `
    );
  }}

  ${function (props) {
    return (
      props.as === "h4" &&
      css`
        font-size: 3rem;
        font-weight: 600;
      `
    );
  }}

  line-height:1.4;
`;

export default Heading;
