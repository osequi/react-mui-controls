import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import Controls, { ControlsPropTypes, ControlsDefaultProps } from "../Controls";

/**
 * Defines the prop types
 */
const propTypes = {
  controls: PropTypes.shape(ControlsPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  controls: {
    title: "Controls demo",
    items: [
      { id: shortid.generate(), type: "text", label: "Text", value: "text" },
      {
        id: shortid.generate(),
        type: "checkbox",
        label: "Checkbox",
        value: true,
      },
      {
        id: shortid.generate(),
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
      },
    ],
  },
};

/**
 * Displays the component
 */
const Demo = (props) => {
  const { controls } = props;

  //const [values, form] = useControls(controls);
  //console.log("values:", values);

  return (
    <div className="Demo">
      <Controls {...controls} />
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
