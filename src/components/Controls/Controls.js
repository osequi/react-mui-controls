import React from "react";
import PropTypes from "prop-types";

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
 * Displays the component
 */
const Controls = (props) => {
  const { title, items } = props;

  const itemsList =
    items &&
    items.map((item) => {
      const { id } = item;

      return (
        <div key={id}>
          <Control {...item} />
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
