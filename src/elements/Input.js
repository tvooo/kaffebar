import styled from "styled-components";

import { borderWidth, radius } from "../attributes/spacing";
import colors from "../attributes/colors";

const Input = styled.input`
  font-family: sweden_sansregular, sans-serif;
  border: ${borderWidth} solid grey;
  background-color: white;
  border-radius: ${radius};
  padding: 0.4em 0.8em;
  color: ${colors.text};

  line-height: 1.25em;
  font-size: 1rem;
  width: 100%;

  &:focus {
    border-color: ${colors.text};
    border-style: dashed;
  }
`;

export default Input;
