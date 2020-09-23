"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlDefaultProps = exports.ControlPropTypes = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _lodash = require("lodash");

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Defines the prop types
 */
var propTypes = {
  type: _propTypes.default.oneOf(["text", "checkbox", "radio"]),
  label: _propTypes.default.string,
  value: _propTypes.default.any,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    label: _propTypes.default.string,
    value: _propTypes.default.any
  })),
  eventHandler: _propTypes.default.func
};
/**
 * Defines the default props
 */

exports.ControlPropTypes = propTypes;
var defaultProps = {
  type: "text",
  label: "Text",
  value: "text",
  items: [],
  eventHandler: function eventHandler() {}
};
/**
 * Displays a text input
 *
 * @see https://react-mui.metamn.now.sh/forms/controlled
 */

exports.ControlDefaultProps = defaultProps;

var Text2 = function Text2(props) {
  var id = props.id,
      label = props.label,
      value = props.value,
      eventHandler = props.eventHandler;
  /**
   * Keeps the input control updated on every keystroke
   */

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      value2 = _useState2[0],
      setValue2 = _useState2[1];
  /**
   * Keeps the input value debounced
   */


  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      debounced = _useState4[0],
      setDebounced = _useState4[1];

  var debounceValue = (0, _react.useCallback)((0, _lodash.debounce)(function (value) {
    return setDebounced(value);
  }, 500), []);
  /**
   * Handles the event
   */

  var handleChange = function handleChange(event) {
    setValue2(event.target.value);
    debounceValue(event.target.value);
  };
  /**
   * Returns the debounced value
   */


  (0, _react.useEffect)(function () {
    eventHandler({
      event: {
        target: {
          value: debounced
        }
      },
      control: props
    });
  }, [debounced]);
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: id,
    label: label,
    defaultValue: value2,
    onChange: handleChange
  });
};
/**
 * Displays a checkbox input
 */


var Checkbox2 = function Checkbox2(props) {
  var id = props.id,
      label = props.label,
      value = props.value,
      eventHandler = props.eventHandler;
  return /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      name: id,
      checked: value
    }),
    label: label,
    onChange: function onChange(event) {
      return eventHandler({
        event: event,
        control: props
      });
    }
  });
};
/**
 * Displays a checkbox input
 */


var Radio2 = function Radio2(props) {
  var id = props.id,
      label = props.label,
      value = props.value,
      items = props.items,
      eventHandler = props.eventHandler;
  var itemsList = items && items.map(function (item) {
    var id = item.id,
        value = item.value,
        label = item.label;
    return /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
      key: id,
      value: value,
      label: label
    });
  });
  return /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
    "aria-label": id,
    name: id,
    value: value,
    onChange: function onChange(event) {
      return eventHandler({
        event: event,
        control: props
      });
    }
  }, itemsList);
};
/**
 * Displays the component
 */


var Control = function Control(props) {
  var type = props.type,
      label = props.label,
      value = props.value;
  var id = (0, _lodash.kebabCase)(label);

  switch (type) {
    case "checkbox":
      return /*#__PURE__*/_react.default.createElement(Checkbox2, _extends({}, props, {
        id: id
      }));

    case "radio":
      return /*#__PURE__*/_react.default.createElement(Radio2, _extends({}, props, {
        id: id
      }));

    case "text":
    default:
      return /*#__PURE__*/_react.default.createElement(Text2, _extends({}, props, {
        id: id
      }));
  }
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
var _default = Control;
exports.default = _default;

//# sourceMappingURL=Control.js.map