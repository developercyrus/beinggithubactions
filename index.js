// using the http module
let http = require('http'),

// look for PORT environment variable,
// else look for CLI argument,
// else use hard coded value for port 8080
hostname = process.env.HOST || '0.0.0.0';
port = process.env.PORT || process.argv[2] || 8080;

// create a simple server
let server = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('hello heroku!', 'utf-8');
        console.log("id=" + req.query.id + ", ip=" + req.headers['x-forwarded-for']); 
        res.end();
    });

// listen on the port
server.listen(port, function () {
    console.log('app up on port: ' + port);
});
