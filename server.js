const http = require('http');
const url = require('url');
const date = require('./modules/utils')
const strings = require('./lang/en/en')

http.createServer(function(req, res) {
  let name = url.parse(req.url,true);
  res.writeHead(200, { "Content-Type": "text/html" });
  const response = strings.greeting.replace("%1", name.query["name"])
  const currentDate = date.getDate()
  res.end(`<div style="color:blue">${response} ${currentDate}</div>`);
}).listen(8081);
//created by gpt