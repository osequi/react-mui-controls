import React from "react";
import PropTypes from "prop-types";

import Control from "../Control";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Demo = (props) => {
  const text = {
    type: "text",
    label: "Text",
    value: "text",
  };

  return (
    <div className="Demo">
      <Control {...text} />
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
