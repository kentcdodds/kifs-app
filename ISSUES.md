# Issues before giving to friends

## `yarn start`

- need remix cli so they don't need to have their own version of "remix start" and "remix build", need @babel/core now

- Error: Cannot find module '/Users/ryan/Desktop/remix-starter/server-build/browser-manifest.json'. Need to set node env to development automatically in `remix run`

- `/Users/ryan/Desktop/remix-starter/node_modules/@remix-run/react/dataCache.js:16 inflight[location.key] = fetchDataResults(location.pathname, fromLocation?.pathname);`

- if I add react router Link or Remix Link to the App.js I get this: `entry-browser.js:10233 Uncaught Error: ensureListeningTo(): received a container that was not an element node. This is likely a bug in React.` Only with newest React. I asked seb/dan/andrew about it.

- style changes don't tickle rollup

- 404 in dev rollup issue: "Error: Could not resolve entry module (app/routes/404.js)"

- Not an issue but cant' find the pages I want. Compare next's full page being "blown away" to remix's nested layouts. Scroll position stays when you navigate a master/detail list, as found on next's own website: https://nextjs.org/docs. Scroll the nav, click an item, whole page starts over from the top. Gross.
