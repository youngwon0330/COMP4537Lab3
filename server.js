const https = require('https');
const url = require('url');
const fs = require('fs');
const utils = require('./modules/utils');
const messages = require('./lang/en/en');

// Your SSL certificate and private key files for HTTPS
const options = {
  key: fs.readFileSync('path/to/your-private.key'),
  cert: fs.readFileSync('path/to/your-certificate.pem')
};

https.createServer(options, (request, response) => {
  const queryObject = url.parse(request.url, true).query;
  
  if (queryObject.name) {
    const name = queryObject.name;
    const time = utils.getDate();
    const responseMessage = `<div style="color: blue;">${messages.greeting.replace('%s', name)} ${time}</div>`;

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(responseMessage);
  } else {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<div>Please provide a name in the query string.</div>');
  }
}).listen(8000); // Standard HTTPS port

console.log('Server is running...');
// created by chatGPT
