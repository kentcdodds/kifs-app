import { c as createCommonjsModule, r as react } from './index-fd36a715.js';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var m,x=m||(m={});x.Pop="POP";x.Push="PUSH";x.Replace="REPLACE";var y=function(a){return a};function A(a){a.preventDefault();a.returnValue="";}
function B(){var a=[];return {get length(){return a.length},push:function(b){a.push(b);return function(){a=a.filter(function(a){return a!==b});}},call:function(b){a.forEach(function(a){return a&&a(b)});}}}function D(){return Math.random().toString(36).substr(2,8)}function E(a){var b=a.pathname,g=a.search;a=a.hash;return (void 0===b?"/":b)+(void 0===g?"":g)+(void 0===a?"":a)}
function F(a){var b={};if(a){var g=a.indexOf("#");0<=g&&(b.hash=a.substr(g),a=a.substr(0,g));g=a.indexOf("?");0<=g&&(b.search=a.substr(g),a=a.substr(0,g));a&&(b.pathname=a);}return b}
function createBrowserHistory(a){function b(){var a=h.location,d=f.state||{};return [d.idx,y({pathname:a.pathname,search:a.search,hash:a.hash,state:d.usr||null,key:d.key||"default"})]}function g(a){return "string"===typeof a?a:E(a)}function t(a,d){void 0===d&&(d=null);return y(_extends({},l,{},"string"===typeof a?F(a):a,{state:d,key:D()}))}function v(a){n=a;a=b();q=a[0];l=a[1];c.call({action:n,location:l});}function w(a,d){function c(){w(a,d);}var k=m.Push,C=t(a,d);if(!e.length||(e.call({action:k,
location:C,retry:c}),!1)){var b=[{usr:C.state,key:C.key,idx:q+1},g(C)];C=b[0];b=b[1];try{f.pushState(C,"",b);}catch(G){h.location.assign(b);}v(k);}}function u(a,d){function c(){u(a,d);}var b=m.Replace,k=t(a,d);e.length&&(e.call({action:b,location:k,retry:c}),1)||(k=[{usr:k.state,key:k.key,idx:q},g(k)],f.replaceState(k[0],"",k[1]),v(b));}function r(a){f.go(a);}void 0===a&&(a={});a=a.window;var h=void 0===a?document.defaultView:a,f=h.history,p=null;h.addEventListener("popstate",function(){if(p)e.call(p),
p=null;else {var a=m.Pop,d=b(),c=d[0];d=d[1];if(e.length)if(null!=c){var f=q-c;f&&(p={action:a,location:d,retry:function(){r(-1*f);}},r(f));}else;else v(a);}});var n=
m.Pop;a=b();var q=a[0],l=a[1],c=B(),e=B();null==q&&(q=0,f.replaceState(_extends({},f.state,{idx:q}),""));return {get action(){return n},get location(){return l},createHref:g,push:w,replace:u,go:r,back:function(){r(-1);},forward:function(){r(1);},listen:function(a){return c.push(a)},block:function(a){var d=e.push(a);1===e.length&&h.addEventListener("beforeunload",A);return function(){d();e.length||h.removeEventListener("beforeunload",A);}}}}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m$1:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A$1(a){return z(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A$1(a)||z(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m$1||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
});

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var has = Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function f$1(){f$1=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);}return a};return f$1.apply(this,arguments)}var k$1=function(a){return a};function l$1(a,b){if(!a)throw Error(b);}var r$1=react.createContext({static:!1});var v$1=react.createContext({outlet:null,params:k$1({}),pathname:"",route:null});function B$1(){return C()}function x$2(a){var b=a.children;b=void 0===b?null:b;var c=a.action;c=void 0===c?m.Pop:c;var d=a.location,e=a.navigator;a=a.static;a=void 0===a?!1:a;z$1()?l$1(!1):void 0;return react.createElement(r$1.Provider,{children:b,value:{action:c,location:d,navigator:e,static:a}})}
function z$1(){return null!=react.useContext(r$1).location}function H(){z$1()?void 0:l$1(!1);return react.useContext(r$1).location}
function C(){return react.useContext(v$1).outlet}function G(a,b){void 0===b&&(b="");var c=react.useContext(v$1),d=c.route,e=c.pathname,g=c.params;b=b?L([e,b]):e;var h=H();return (d=react.useMemo(function(){return M(a,h,b)},[h,a,b]))?d.reduceRight(function(a,c){var d=c.pathname,e=c.route;return react.createElement(v$1.Provider,{children:e.element,value:{outlet:a,params:k$1(f$1({},g,{},c.params)),pathname:L([b,d]),route:e}})},null):null}function N(a){return a.map(function(a){var c={path:a.path||"/",caseSensitive:!0===a.caseSensitive,element:a.element||react.createElement(B$1,null)};a.children&&(c.children=N(a.children));return c})}
function M(a,b,c){void 0===c&&(c="");"string"===typeof b&&(b=F(b));b=b.pathname||"/";if(c)if(c=c.replace(/^\/*/,"/").replace(/\/+$/,""),b.startsWith(c))b=b===c?"/":b.slice(c.length);else return null;a=O(a);P(a);var d=null;for(c=0;null==d&&c<a.length;++c)a:{d=b;for(var e=a[c][1],g="/",h={},I=[],n=0;n<e.length;++n){var t=e[n],u="/"===g?d:d.slice(g.length)||"/";u=Q({path:t.path,caseSensitive:t.caseSensitive,end:n===e.length-1},u);if(!u){d=null;break a}g=L([g,u.pathname]);h=f$1({},h,{},u.params);
I.push({route:t,pathname:g,params:k$1(h)});}d=I;}return d}function O(a,b,c,d,e){void 0===b&&(b=[]);void 0===c&&(c="");void 0===d&&(d=[]);void 0===e&&(e=[]);a.forEach(function(a,h){var g=L([c,a.path]),n=d.concat(a);h=e.concat(h);a.children&&O(a.children,b,g,n,h);b.push([g,n,h]);});return b}function P(a){var b=a.reduce(function(a,b){b=b[0];a[b]=R(b);return a},{});S(a,function(a,d){var c=a[2];a=b[a[0]];var g=d[2];d=b[d[0]];return a!==d?d-a:T(c,g)});}var U=/^:\w+$/,V=2,W=1,X=10,Y=-2;
function Z(a){return "*"===a}function R(a){a=a.split("/");var b=a.length;a.some(Z)&&(b+=Y);return a.filter(function(a){return !Z(a)}).reduce(function(a,b){return a+(U.test(b)?V:""===b?W:X)},b)}function T(a,b){return a.length===b.length&&a.slice(0,-1).every(function(a,d){return a===b[d]})?a[a.length-1]-b[b.length-1]:0}function S(a,b){var c=a.slice(0);a.sort(function(a,e){return b(a,e)||c.indexOf(a)-c.indexOf(e)});}
function Q(a,b){"string"===typeof a&&(a={path:a});var c=a;a=c.path;var d=c.caseSensitive;c=c.end;c=aa(a,void 0===d?!1:d,void 0===c?!0:c);d=c[1];c=b.match(c[0]);if(!c)return null;b=c[1];var e=c.slice(2);d=d.reduce(function(a,b,c){c=e[c];try{var d=decodeURIComponent(c.replace(/\+/g," "));}catch(t){d=c;}a[b]=d;return a},{});return {path:a,pathname:b,params:d}}function aa(a,b,c){var d=[],e="^("+a.replace(/^\/*/,"/").replace(/\/?\*?$/,"").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,function(a,b){d.push(b);return "([^\\/]+)"})+")";a.endsWith("*")?(a.endsWith("/*")&&(e+="\\/?"),d.push("*"),e+="(.*)"):c&&(e+="\\/?");c&&(e+="$");return [new RegExp(e,b?void 0:"i"),d]}
function L(a){return a.join("/").replace(/\/\/+/g,"/")}function useRoutes(a,b){void 0===b&&(b="");z$1()?void 0:l$1(!1);var c=react.useMemo(function(){return N(a)},[a]);return G(c,b)}

function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

function createDataCache(initialKey, initialData) {
  let cache = {
    [initialKey]: initialData
  };
  let inflight = {};

  async function preload(prevLocation, nextLocation, prevMatches, nextMatches) {
    if (cache[nextLocation.key]) return;
    let cachedOrFetchedData = await Promise.all(nextMatches.map(match => {
      let prevMatch = prevMatches.find(prev => prev.pathname === match.pathname);
      return prevMatch && prevLocation.search === nextLocation.search ? read(prevLocation.key, match.route.id) : load(nextLocation, match.route.id, match.params);
    }));
    cache[nextLocation.key] = cachedOrFetchedData.reduce((routeData, data, index) => {
      let match = nextMatches[index];
      routeData[match.route.id] = data;
      return routeData;
    }, {});
  }

  async function load(location, routeId, params) {
    invariant(!cache[location.key], `Already loaded data for location ${location.key}`);
    invariant(!(cache[location.key] && routeId in cache[location.key]), `Already loaded data for route ${routeId} on location ${location.key}`);
    let inflightKey = location.key + ":" + routeId;

    if (inflight[inflightKey]) {
      return inflight[inflightKey];
    }

    inflight[inflightKey] = fetchDataForRoute(location, routeId, params);

    try {
      return await inflight[inflightKey];
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      delete inflight[inflightKey];
    }
  }

  function read(locationKey, routeId) {
    let locationData = cache[locationKey];
    invariant(locationData, `Missing data for location ${locationKey}`);
    if (!routeId) return locationData;
    invariant(locationData[routeId] !== undefined, `Missing data for route ${routeId} on location ${locationKey}`);
    return locationData[routeId];
  }

  return {
    preload,
    read
  };
}

async function fetchDataForRoute(location, routeId, routeParams) {
  let url = new URL(location.pathname + location.search, window.location.origin);
  let params = new URLSearchParams({
    url: url.toString(),
    id: routeId,
    params: JSON.stringify(routeParams)
  });
  let res = await fetch(`/__remix_data?${params.toString()}`);
  let contentType = res.headers.get("Content-Type");

  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return res.json();
  }

  return res.text();
}

const defaultRoute = {
  meta() {
    return {
      title: "Remix Error: Route Not Found",
      description: "There was an error rendering this page"
    };
  },

  default({
    children
  }) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, "Error!"), /*#__PURE__*/react.createElement("div", null, children));
  }

};

var defaultRouteModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': defaultRoute
});

function createManifestCache(initialPathname, initialAssets, initialRoutes) {
  let patchCache = {
    [initialPathname]: {
      assets: initialAssets,
      routes: initialRoutes
    }
  };
  let cache = {
    assets: initialAssets,
    routes: initialRoutes
  };

  async function preload(pathname, reloadOnNotFound = false) {
    if (patchCache[pathname]) {
      return patchCache[pathname];
    }

    let patch = await fetchManifestPatch(pathname);
    patchCache[pathname] = patch;

    if (patch) {
      Object.assign(cache.assets, patch.assets);
      Object.assign(cache.routes, patch.routes);
    } else if (reloadOnNotFound) {
      // Never resolve so we will not try to rerender this
      // page before the reload.
      return new Promise(() => {
        window.location.reload();
      });
    }
  }

  function read() {
    return cache;
  }

  return {
    preload,
    read
  };
}

async function fetchManifestPatch(pathname) {
  let url = new URL(pathname, window.location.origin);
  let params = new URLSearchParams({
    url: url.toString()
  });
  let res = await fetch(`/__remix_manifest?${params.toString()}`);

  if (res.status === 404) {
    return null;
  }

  return res.json();
}

function createClientRoute(entryRoute) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    id: entryRoute.id,
    path: entryRoute.path,
    element: /*#__PURE__*/react.createElement(RemixRoute, {
      id: entryRoute.id
    })
  };
}
function createClientRoutes(routeManifest) {
  let routes = [];
  let addedRoutes = {};
  let routeIds = Object.keys(routeManifest).sort();

  for (let routeId of routeIds) {
    let entryRoute = routeManifest[routeId];
    let route = createClientRoute(entryRoute);

    if (entryRoute.parentId) {
      let parentRoute = addedRoutes[entryRoute.parentId];
      invariant(parentRoute, `Missing parent route "${entryRoute.parentId}" for ${entryRoute.id}`);
      (parentRoute.children || (parentRoute.children = [])).push(route);
    } else {
      routes.push(route);
    }

    addedRoutes[routeId] = route;
  }

  return routes;
}

function matchClientRoutes(routes, location) {
  let matches = M(routes, location);
  invariant(matches, "Missing matches");
  return matches.map(match => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

function createClientMatches(matches) {
  return matches.map(match => ({ ...match,
    route: createClientRoute(match.route)
  }));
} ///////////////////////////////////////////////////////////////////////////////

function useLazyRef(init) {
  let ref = react.useRef();
  if (ref.current === undefined) ref.current = init();
  return ref.current;
}

const RemixEntryContext = /*#__PURE__*/react.createContext(undefined);
function useRemixEntryContext() {
  let context = react.useContext(RemixEntryContext);
  invariant(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixEntry({
  children,
  context: entryContext,
  action: nextAction,
  location: nextLocation,
  navigator,
  static: staticProp = false
}) {
  let {
    assets: assetManifest,
    globalData,
    matches: entryMatches,
    publicPath,
    routeData,
    routeLoader,
    routes: routeManifest,
    serverHandoffString
  } = entryContext;
  let [state, setState] = react.useState({
    action: nextAction,
    location: nextLocation,
    matches: createClientMatches(entryMatches),
    pending: false
  });
  let {
    action,
    location,
    matches,
    pending
  } = state;
  let globalDataState = react.useState(globalData);
  let dataCache = useLazyRef(() => createDataCache(location.key, routeData));
  let manifestCache = useLazyRef(() => createManifestCache(location.pathname, assetManifest, routeManifest));
  react.useEffect(() => {
    if (location === nextLocation) return;
    let isCurrent = true;
    setState(state => ({ ...state,
      pending: true
    }));

    (async () => {
      await manifestCache.preload(nextLocation.pathname, true);
      let manifest = manifestCache.read();
      let routes = createClientRoutes(manifest.routes);
      let nextMatches = matchClientRoutes(routes, nextLocation);
      let dataPromise = dataCache.preload(location, nextLocation, matches, nextMatches);
      await Promise.all(nextMatches.map(match => routeLoader.preload(manifest.assets, match.route.id)));
      await dataPromise;

      if (isCurrent) {
        setState({
          action: nextAction,
          location: nextLocation,
          matches: nextMatches,
          pending: false
        });
      }
    })();

    return () => {
      isCurrent = false;
    };
  }, [nextAction, nextLocation, location, matches]);
  let context = {
    dataCache,
    globalDataState,
    manifestCache,
    matches,
    pending,
    // TODO: Move into RR v6
    publicPath,
    routeLoader,
    serverHandoffString
  };
  return /*#__PURE__*/react.createElement(x$2, {
    action: action,
    location: location,
    navigator: navigator,
    static: staticProp
  }, /*#__PURE__*/react.createElement(RemixEntryContext.Provider, {
    value: context
  }, children));
} ////////////////////////////////////////////////////////////////////////////////

const RemixRouteContext = /*#__PURE__*/react.createContext(undefined);
function useRemixRouteContext() {
  let context = react.useContext(RemixRouteContext);
  invariant(context, "You must render this element in a remix route element");
  return context;
}
function RemixRoute({
  id
}) {
  let {
    routeLoader
  } = useRemixEntryContext();
  let routeModule = routeLoader.read(id);

  if (!routeModule) {
    return /*#__PURE__*/react.createElement(defaultRoute.default, null, /*#__PURE__*/react.createElement(RemixRouteMissing, {
      id: id
    }));
  }

  let remixRouteContext = {
    id
  };
  return /*#__PURE__*/react.createElement(RemixRouteContext.Provider, {
    value: remixRouteContext
  }, /*#__PURE__*/react.createElement(routeModule.default, null));
}

function RemixRouteMissing({
  id
}) {
  return /*#__PURE__*/react.createElement("p", null, "Missing route \"", id, "\"!");
}

function createHtml(html) {
  return {
    __html: html
  };
}

/**
 * Renders the `<title>` and `<meta>` tags for the current routes.
 */

function Meta() {
  let {
    dataCache,
    routeLoader,
    matches
  } = useRemixEntryContext();
  let location = H();
  let routeData = dataCache.read(location.key);
  if (!routeData) return null;
  let meta = {};
  let parentsData = {};

  for (let match of matches) {
    let routeId = match.route.id;
    let data = routeData[routeId];
    let params = match.params;
    let routeModule = routeLoader.read(routeId) || defaultRouteModule;

    if (typeof routeModule.meta === "function") {
      Object.assign(meta, routeModule.meta({
        data,
        parentsData,
        params,
        location
      }));
      Object.assign(parentsData, {
        [routeId]: data
      });
    }
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, Object.keys(meta).map(name => name === "title" ? /*#__PURE__*/react.createElement("title", {
    key: "title"
  }, meta[name]) : /*#__PURE__*/react.createElement("meta", {
    key: name,
    name: name,
    content: meta[name]
  })));
}
/**
 * Renders the <script> tags needed for the initial render of this page.
 * Additional scripts are loaded later as needed.
 */

function Scripts() {
  let {
    manifestCache,
    publicPath,
    serverHandoffString
  } = useRemixEntryContext();
  let manifest = manifestCache.read();
  let entryBrowser = manifest.assets["entry-browser"];
  let src = `${publicPath}${entryBrowser.fileName}`;
  let browserIsHydrating = false;

  if (!serverHandoffString) {
    browserIsHydrating = true;
    serverHandoffString = "{}";
  }

  let remixServerHandoff = `window.__remixServerHandoff = ${serverHandoffString}`;
  let routeIds = Object.keys(manifest.routes).filter(routeId => routeId in manifest.assets);
  let remixRoutes = `${routeIds.map((routeId, index) => `import * as route${index} from ${JSON.stringify(publicPath + manifest.assets[routeId].fileName)};`).join("\n")}
    window.__remixRoutes = {${routeIds.map((routeId, index) => `${JSON.stringify(routeId)}:route${index}`).join(",")}};`;
  return react.useMemo(() => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("script", {
    suppressHydrationWarning: browserIsHydrating,
    dangerouslySetInnerHTML: createHtml(remixServerHandoff)
  }), /*#__PURE__*/react.createElement("script", {
    dangerouslySetInnerHTML: createHtml(remixRoutes),
    type: "module"
  }), /*#__PURE__*/react.createElement("script", {
    src: src,
    type: "module"
  })), []);
}
/**
 * Renders the styles needed for the current routes.
 */

function Styles() {
  let {
    manifestCache,
    publicPath,
    matches
  } = useRemixEntryContext();
  let manifest = manifestCache.read();
  let styleFiles = [manifest.assets["global.css"].fileName];

  for (let match of matches) {
    let key = `${match.route.id}.css`;

    if (manifest.assets[key]) {
      styleFiles.push(manifest.assets[key].fileName);
    }
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, styleFiles.map(fileName => /*#__PURE__*/react.createElement("link", {
    key: fileName,
    rel: "stylesheet",
    href: publicPath + fileName
  })));
}
/**
 * Renders the routes for this page. Suspends if we don't yet have the manifest
 * or routes for this page and need to get them from the server.
 */

function Routes() {
  // TODO: Add `renderMatches` function to RR that we
  // can use here with the matches we get from context.
  let {
    manifestCache
  } = useRemixEntryContext();
  let routes = createClientRoutes(manifestCache.read().routes);
  return useRoutes(routes);
}
/**
 * Returns the data for the current route from `data/routes/*`.
 */

function useRouteData() {
  let {
    dataCache
  } = useRemixEntryContext();
  let {
    id: routeId
  } = useRemixRouteContext();
  let location = H();
  let data = dataCache.read(location.key, routeId);
  let setData = react.useCallback(nextData => {
    /* cache.set(routeId, nextData); */
  }, [dataCache, routeId]);
  return [data, setData];
} // TODO: Move this back into RR v6 beta (out of experimental)

export { Meta as M, RemixEntry as R, Styles as S, _extends as _, Routes as a, Scripts as b, createBrowserHistory as c, invariant as i, useRouteData as u };
