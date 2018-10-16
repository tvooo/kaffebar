import styled from "styled-components";
import colors from "../attributes/colors";

const Button = styled.button`
  font-family: sweden_sansregular, sans-serif;
  border: 0.15rem solid ${colors.blue};
  background-color: ${colors.blue};
  border-radius: 3px;
  padding: 0.4em 0.8em;
  color: white;
  text-align: center;
  min-width: 120px;
  cursor: pointer;
  line-height: 1.25em;
  font-size: 1rem;
  appearance: none;
  font-weight: 700;
  outline: 0;

  &:hover {
    border-color: ${colors.blue7};
    background-color: ${colors.blue7};
  }
  &:focus {
    border-style: dashed;
    border-color: ${colors.blue7};
  }
`;

const GhostButton = styled(Button)`
    border-color: ${colors.grey2};
    background-color: ${colors.grey2};
    color: ${colors.text};
  }

  &:hover {
    border-color: ${colors.grey3};
    background-color: ${colors.grey3};
  }
`;

const BareButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:hover {
    color: ${colors.blue7};
  }
`;

export { GhostButton, BareButton };

export default Button;
