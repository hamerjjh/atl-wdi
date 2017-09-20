const http = require('http');
const urlParser = require('url'); // Adds urlParser
const server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
  var urlObj  = urlParser.parse( request.url ); //
  var pathname = urlObj.pathname; // parsing our the important info in the url
  
  console.log("requested: " + pathname);
  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html>');
 

  if(pathname === '/fun-times'){
    response.write(`<h1>fun times!</h1>`);
    response.write(`<li>Golf</li>`)
    response.write(`<li>basketball</li>`)
    response.write(`<li>reading</li>`)
  } else if {(pathname === '/movies)'{
    response.write(`<h1>favorite movies!</h1>`)
  }
}

  response.write('<script>console.log("I  \'m client-side JavaScript being sent via server-side JavaScript");</script>');
  response.write('</html>');
  response.end();
});
  // 10.1.4.117:3001
