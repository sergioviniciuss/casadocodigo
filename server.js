const http = require('http');

const server = http.createServer((req, res) => {
  let html = '';
  if (req.url === '/') {
    html = `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1> It works!</h1>
        </body>
      </html>
    `;
  } else if (req.url === '/books') {
    html = `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1> Books!</h1>
        </body>
      </html>
    `;
  }
  res.end(html);
});
console.log('listening on port 3000...');
server.listen(3000);