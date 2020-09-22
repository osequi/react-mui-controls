import React, { useState } from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Control, { ControlPropTypes, ControlDefaultProps } from "../Control";

/**
 * Defines the prop types
 */
const propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(ControlPropTypes)),
};

/**
 * Defines the default props
 */
const defaultProps = {
  title: "Controls",
  items: [],
};

/**
 * Loads initial values from props
 */
const loadInitialValues = (props) => {
  const { items } = props;

  let values = [];

  items &&
    items.map((item) => {
      const { label, value } = item;
      return (values[kebabCase(label)] = value);
    });

  return values;
};

/**
 * Returns the value of an event fired on various types of controls
 */
const getEventValue = (props) => {
  const { event, control } = props;
  const { type } = control;

  switch (type) {
    case "checkbox":
      return event.target.checked;
    default:
      return event.target.value;
  }
};

/**
 * Displays the component
 */
const Controls = (props) => {
  const { title, items } = props;

  /**
   * Manages the state of values
   */
  const initialValues = loadInitialValues(props);
  const [values, setValues] = useState(initialValues);

  const eventHandler = (props) => {
    const { control } = props;
    const { label } = control;

    const newValues = { ...values };
    newValues[kebabCase(label)] = getEventValue(props);

    setValues(newValues);
  };

  /**
   * Displays the controls
   */
  const itemsList =
    items &&
    items.map((item) => {
      const { id, label } = item;

      return (
        <div key={id}>
          <Control
            {...item}
            value={values[kebabCase(label)]}
            eventHandler={eventHandler}
          />
        </div>
      );
    });

  return (
    <div className="Controls">
      <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
        {itemsList}
      </FormControl>
    </div>
  );
};

Controls.propTypes = propTypes;
Controls.defaultProps = defaultProps;

export default Controls;
export { propTypes as ControlsPropTypes, defaultProps as ControlsDefaultProps };
