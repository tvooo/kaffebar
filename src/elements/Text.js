import React from "react";
import PropTypes from "prop-types";
import { typeSizes, spacing as kbSpacing } from "../attributes/spacing";

const Text = ({ tag: Tag, size, children, spacing, ...rest }) => (
  <Tag
    {...rest}
    style={{
      ...typeSizes[size],
      margin: "0",
      marginBottom: kbSpacing[spacing]
    }}
  >
    {children}
  </Tag>
);

Text.propTypes = {
  tag: PropTypes.oneOf(["div", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf(Object.keys(typeSizes)),
  spacing: PropTypes.oneOf(Object.keys(kbSpacing))
};

Text.defaultProps = {
  tag: "div",
  spacing: "wee"
};

export default Text;
