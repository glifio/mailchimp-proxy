const express = require('express')
const makeProxy = require('http-proxy-middleware')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3001

const options = {
  target: process.env.TARGET,
  logLevel: 'debug',
  ignorePath: true,
  onProxyReq: proxyReq => {
    proxyReq.setHeader('Authorization', `Bearer ${process.env.TOKEN}`)
  },
  onProxyRes: proxyRes => {
    delete proxyRes.headers.Authorization
  }
}

const proxy = makeProxy(options)

const app = express(proxy)
app.use(cors())
app.use('/', proxy)
app.listen(PORT)
