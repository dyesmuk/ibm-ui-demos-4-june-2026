import http from 'http';

const PORT = 3000;

// syntax 
// const server = http.createServer((request, response) => {});
// server.listen(PORT, () => { });

const server = http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);
    // request.
    if (request.url == '/')
        response.end('Welcome');
    else if (request.url == '/about')
        response.end('About page');
    else
        response.end('404! Page not found!');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// server.


