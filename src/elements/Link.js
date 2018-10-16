import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";

import colors from "../attributes/colors";
//
// const Link = styled.a`
//   font-weight: inherit;
//   display: inline-block;
//   color: red;
//   cursor: pointer;
//   text-decoration: underline;
// `;
//
const Link = styled.a`
  border-bottom: 0.2rem solid ${themeGet("colors.text")};
  text-decoration: none;
  font-weight: normal;
  color: ${themeGet("colors.text")};
  cursor: pointer;

  &:hover {
    border-color: ${themeGet("colors.primary")};
  }
`;

export default Link;
