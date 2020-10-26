import { r as react } from './_shared/node_modules/react-389b5361.js';
import './_shared/node_modules/object-assign-c47a16a6.js';
import './_shared/node_modules/scheduler-841e5a67.js';
import { r as reactDom } from './_shared/node_modules/react-dom-704b8963.js';
import './_shared/node_modules/@babel/runtime-f4ff0cc0.js';
import './_shared/node_modules/history-e2bdd78d.js';
import './_shared/node_modules/react-is-ecc87362.js';
import './_shared/node_modules/prop-types-3e3724cf.js';
import './_shared/node_modules/react-router-87cd6571.js';
import { M as Meta, S as Styles, R as Routes, a as Scripts, b as RemixBrowser } from './_shared/node_modules/@remix-run/react-e04e4e03.js';

function App() {
  return /*#__PURE__*/react.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react.createElement("head", null, /*#__PURE__*/react.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react.createElement(Meta, null), /*#__PURE__*/react.createElement(Styles, null)), /*#__PURE__*/react.createElement("body", null, /*#__PURE__*/react.createElement(Routes, null), /*#__PURE__*/react.createElement(Scripts, null)));
}

reactDom.hydrate( /*#__PURE__*/react.createElement(RemixBrowser, null, /*#__PURE__*/react.createElement(App, null)), document);
