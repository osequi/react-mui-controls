import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import Control from "../Control";
import Controls from "../Controls";

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

  const checkbox = {
    type: "checkbox",
    label: "Checkbox",
    value: true,
  };

  const radio = {
    type: "radio",
    label: "Radio",
    value: "Y",
    items: [
      {
        id: shortid.generate(),
        label: "X",
        value: "X",
      },
      {
        id: shortid.generate(),
        label: "Y",
        value: "Y",
      },
      {
        id: shortid.generate(),
        label: "Z",
        value: "Z",
      },
    ],
  };

  const controls = {
    title: "Controls demo",
    items: [
      { id: shortid.generate(), ...text },
      { id: shortid.generate(), ...checkbox },
      { id: shortid.generate(), ...radio },
    ],
  };

  return (
    <div className="Demo">
      <Control {...text} />
      <Control {...checkbox} />
      <Control {...radio} />
      <hr />
      <Controls {...controls} />
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
