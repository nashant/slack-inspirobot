const http = require('http')

const inspirme = (request, response) => {
  var url = 'http://inspirobot.me/api?generate=true';

  http.get(url, res => {
    res.setEncoding("utf8");
    var body = '';
    res.on('data', data => {
      body += data;
    });
    res.on('end', () => {
      response.end(body)
    });
  });
}

const server = http.createServer(inspireme)

server.listen(3010);
