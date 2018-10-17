import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Text from './Text';
import colors from "../attributes/colors";

const Link = styled(Text)`
  border-bottom: 0.2rem solid ${themeGet("colors.text")};
  text-decoration: none;
  font-weight: normal;
  color: ${themeGet("colors.text")};
  cursor: pointer;

  &:hover {
    border-color: ${themeGet("colors.primary")};
  }
`;

Link.defaultProps = {
  as: 'a'
}

export default Link;
