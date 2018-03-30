import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../attributes/colors";

const Link = styled.a`
  font-weight: inherit;
  display: inline-block;
  color: ${colors.blue};
  cursor: pointer;
  ${"" /* border-bottom: 2px solid ${colors.blue}; */} text-decoration: underline;
`;

export default Link;
