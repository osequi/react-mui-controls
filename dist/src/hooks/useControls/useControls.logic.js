"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventValue = exports.loadInitialValues = void 0;

var _lodash = require("lodash");

/**
 * Loads initial values from props
 */
var loadInitialValues = function loadInitialValues(props) {
  var items = props.items;
  var values = [];
  items && items.map(function (item) {
    var label = item.label,
        value = item.value;
    return values[(0, _lodash.kebabCase)(label)] = value;
  });
  return values;
};
/**
 * Returns the value of an event fired on various types of controls
 */


exports.loadInitialValues = loadInitialValues;

var getEventValue = function getEventValue(props) {
  var event = props.event,
      control = props.control;
  var type = control.type;

  switch (type) {
    case "checkbox":
      return event.target.checked;

    default:
      return event.target.value;
  }
};

exports.getEventValue = getEventValue;

//# sourceMappingURL=useControls.logic.js.map