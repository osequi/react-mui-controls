import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { kebabCase } from "lodash";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

/**
 * Defines the prop types
 */
const propTypes = {
  type: PropTypes.oneOf(["text", "checkbox", "radio"]),
  label: PropTypes.string,
  value: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: "text",
  label: "Text",
  value: "text",
  items: [],
};

/**
 * Displays a text input
 */
const Text2 = (props) => {
  const { id, label, value } = props;

  return <TextField id={id} label={label} defaultValue={value} />;
};

/**
 * Displays a checkbox input
 */
const Checkbox2 = (props) => {
  const { id, label, value } = props;

  return (
    <FormControlLabel
      control={<Checkbox name={id} checked={value} />}
      label={label}
    />
  );
};

/**
 * Displays a checkbox input
 */
const Radio2 = (props) => {
  const { id, label, value, items } = props;

  const itemsList =
    items &&
    items.map((item) => {
      const { id, value, label } = item;

      return (
        <FormControlLabel
          control={<Radio />}
          key={id}
          value={value}
          label={label}
        />
      );
    });

  return (
    <RadioGroup aria-label={id} name={id} value={value}>
      {itemsList}
    </RadioGroup>
  );
};

/**
 * Displays the component
 */
const Control = (props) => {
  const { type, label, value } = props;

  const id = kebabCase(label);

  switch (type) {
    case "checkbox":
      return <Checkbox2 {...props} id={id} />;
    case "radio":
      return <Radio2 {...props} id={id} />;
    case "text":
    default:
      return <Text2 {...props} id={id} />;
  }
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
export { propTypes as ControlPropTypes, defaultProps as ControlDefaultProps };
