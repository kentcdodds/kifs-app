'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// console.log({React, useRouteData, useQuery})
function meta() {
  return {
    title: 'Kifs Directory',
    description: 'KCD Gifs you can use on the KCD Discord'
  };
}

function Index() {
  const [search, setSearch] = React__default['default'].useState(''); // const [{data, error}] = useRouteData()
  // useErrorHandler(error)

  return 'hello';
}

exports.default = Index;
exports.meta = meta;
