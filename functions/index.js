global.fetch = require('node-fetch')
const path = require('path')
const express = require('express')
const serverless = require('serverless-http')
const {createRequestHandler: remix} = require('@remix-run/express')

const app = express()
app.use(express.static('public'))

app.get(
  '*',
  remix({
    root: path.join(__dirname, '..'),
    getLoadContext(req, res) {
      return {}
    },
  }),
)

module.exports.handler = serverless(app)
