// using the http module
const http = require('http'),
      url = require('url');

// look for PORT environment variable,
// else look for CLI argument,
// else use hard coded value for port 8080
hostname = process.env.HOST || '0.0.0.0';
port = process.env.PORT || process.argv[2] || 8080;

// create a simple server
const server = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('hello heroku!', 'utf-8');
        var query = url.parse(req.url,true).query;
        console.log("id=" + query.id + ", ip=" + req.headers['x-forwarded-for']); 
        res.end();
    });

// listen on the port
server.listen(port, function () {
    console.log('app up on port: ' + port);
});
