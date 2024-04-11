const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('D:/Learning/web development/class_ass/vada.html', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 NOT FOUND");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(3000, function() {
    console.log("Server running on port 3000");
});
