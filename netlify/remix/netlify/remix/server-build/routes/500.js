'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function meta() {
  return {
    title: "Shoot..."
  };
}
function FourOhFour() {
  console.error("Check your server terminal output");
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("h1", null, "500"));
}

exports.default = FourOhFour;
exports.meta = meta;
