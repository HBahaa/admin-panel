// const express = require('express');
// const serveStatic = require("serve-static")
// const path = require('path');
// const app = express();

// // app.use(serveStatic(path.join(__dirname, './dist')));
// app.use('/dist', express.static(path.join(__dirname, './dist')));
// const port = process.env.PORT || 8080;
// const host = process.env.HOST || 'localhost'

// app.listen(port, host)

const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
//obtain bundle
// const bundle =  require('./dist/server.bundle.js');
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
  //set template
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('*', (req, res) => { 
  
});  

server.listen(8080);
