'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var server = require('react-dom/server');
var loader = require('@remix-run/loader');
var Remix = require('@remix-run/react/server');
var react = require('@remix-run/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Remix__default = /*#__PURE__*/_interopDefaultLegacy(Remix);

function App() {
  return /*#__PURE__*/React__default['default'].createElement("html", {
    lang: "en"
  }, /*#__PURE__*/React__default['default'].createElement("head", null, /*#__PURE__*/React__default['default'].createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React__default['default'].createElement(react.Meta, null), /*#__PURE__*/React__default['default'].createElement(react.Styles, null)), /*#__PURE__*/React__default['default'].createElement("body", null, /*#__PURE__*/React__default['default'].createElement(react.Routes, null), /*#__PURE__*/React__default['default'].createElement(react.Scripts, null)));
}

function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = server.renderToString( /*#__PURE__*/React__default['default'].createElement(Remix__default['default'], {
    url: request.url,
    context: remixContext
  }, /*#__PURE__*/React__default['default'].createElement(App, null)));
  return new loader.Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: { ...Object.fromEntries(responseHeaders),
      "Content-Type": "text/html"
    }
  });
}

exports.default = handleRequest;
