import React from "react";
import { typeSizes, spacing as kbSpacing } from "../attributes/spacing";
import styled from "styled-components";
import { space, width, fontSize, color, fontFamily, themeGet } from "styled-system";

const Text = styled.div`
  ${fontFamily}
  ${fontSize}
  color: ${themeGet("colors.text")}
  ${color}
  line-height: 1.4em;
`;
//
// const Text = ({ tag: Tag, size, children, spacing, ...rest }) => (
//   <Tag
//     {...rest}
//     style={{
//       ...typeSizes[size],
//       margin: "0",
//       marginBottom: kbSpacing[spacing]
//     }}
//   >
//     {children}
//   </Tag>
// );
//
// Text.propTypes = {
//   tag: PropTypes.oneOf(["div", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
//   size: PropTypes.oneOf(Object.keys(typeSizes)),
//   spacing: PropTypes.oneOf(Object.keys(kbSpacing))
// };
//
// Text.defaultProps = {
//   tag: "div",
//   spacing: "wee"
// };

export default Text;
