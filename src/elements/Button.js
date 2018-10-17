import styled from "styled-components";
import { themeGet, fontFamily, style } from 'styled-system'

const Button = styled.button.attrs({
  type: "button"
})`
  ${fontFamily}
  appearance: none;

  font-size: 1rem;
  border: 0.2em solid ${props => themeGet(props.color ? ('colors.' + props.color) : 'colors.text')};
  color: ${props => themeGet(props.color ? ('colors.' + props.color) : 'colors.text')};
  background: transparent;
  border-radius: 0.2rem;
  padding: 0.5em 1em;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${props => themeGet(props.color ? ('colors.' + props.color) : 'colors.text')};
    color: white;
  }
`;

Button.defaultProps = {
  fontFamily: 'sans-serif',
}


export default Button;
