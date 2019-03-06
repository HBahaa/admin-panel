const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();

// app.use(serveStatic(path.join(__dirname, './dist')));
app.use('/dist', express.static(path.join(__dirname, './dist')));
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0'
