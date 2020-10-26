import React from 'react'
import {
  Meta,
  Scripts,
  Styles,
  Routes,
  useGlobalData,
  Link,
} from '@remix-run/react'

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
      </body>
    </html>
  )
}

export default App
