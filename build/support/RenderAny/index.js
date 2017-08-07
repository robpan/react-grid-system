'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderAny = function RenderAny(_ref) {
  var children = _ref.children,
      style = _ref.style;

  if (typeof children === 'function') {
    return _react2.default.createElement(
      'div',
      { style: style },
      'children()'
    );
  }
  if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && Array.isArray(children)) {
    return _react2.default.createElement(
      'div',
      { style: style },
      children
    );
  }
  return _react2.default.createElement(
    'div',
    { style: style },
    'children'
  );
};

RenderAny.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func]).isRequired,
  style: _propTypes2.default.shape({})
};

exports.default = RenderAny;