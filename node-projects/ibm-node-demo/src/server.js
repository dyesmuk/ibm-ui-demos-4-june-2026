import http from 'http';
import fs from 'fs';
import path from 'path';
import { Server } from 'socket.io';

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        const filePath = path.join(
            process.cwd(),
            'src',
            'public',
            'index.html'
        );

        fs.readFile(filePath, 'utf8', (err, data) => {

            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Error loading page');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(data);
        });

        return;
    }

    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });

    res.end('Page Not Found');
});

const io = new Server(server);

io.on('connection', (socket) => {

    console.log(`Client connected: ${socket.id}`);

    socket.on('chat-message', (msg) => {

        console.log(`Received: ${msg}`);

        io.emit('chat-message', msg);
    });

    socket.on('disconnect', () => {

        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);
});





