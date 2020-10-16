global.fetch = require('node-fetch')
const express = require('express')
const {createRequestHandler: remix} = require('@remix-run/express')

const app = express()
app.use(express.static('public'))

app.get(
  '*',
  remix({
    getLoadContext(req, res) {
      return {}
    },
  }),
)

app.listen(3000)
console.log('Express server started on http://localhost:3000')
