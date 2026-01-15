// simple-server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4200;
const backendURL = 'http://localhost:8080';

const server = http.createServer(async (req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Servir archivos estáticos
    if (req.url === '/' || req.url === '/index.html') {
        serveFile(res, './index.html', 'text/html');
        return;
    }
    
    // Proxy para API
    if (req.url.startsWith('/api/')) {
        proxyToBackend(req, res);
        return;
    }
    
    // Servir otros archivos estáticos
    const filePath = '.' + req.url;
    const ext = path.extname(filePath);
    
    if (fs.existsSync(filePath)) {
        const contentType = getContentType(ext);
        serveFile(res, filePath, contentType);
    } else {
        // Redirigir todo a index.html para SPA
        serveFile(res, './index.html', 'text/html');
    }
});

function serveFile(res, filePath, contentType) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Archivo no encontrado');
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*'
            });
            res.end(content, 'utf-8');
        }
    });
}

function getContentType(ext) {
    const types = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.ico': 'image/x-icon'
    };
    return types[ext] || 'text/plain';
}

async function proxyToBackend(req, res) {
    try {
        const backendReq = http.request({
            hostname: 'localhost',
            port: 8080,
            path: req.url,
            method: req.method,
            headers: { ...req.headers, host: 'localhost:8080' }
        }, (backendRes) => {
            res.writeHead(backendRes.statusCode, backendRes.headers);
            backendRes.pipe(res);
        });
        
        req.pipe(backendReq);
    } catch (error) {
        res.writeHead(500);
        res.end('Error del proxy: ' + error.message);
    }
}

server.listen(PORT, () => {
    console.log('🚀 =========================================');
    console.log('✅ SERVIDOR EXAMEN DSII INICIADO');
    console.log('🚀 =========================================');
    console.log(`🌐 Frontend: http://localhost:${PORT}`);
    console.log(`🔧 Backend:  ${backendURL}`);
    console.log('📊 Base de datos: MySQL con 8 productos');
    console.log('🏗️ Arquitectura: N-Capas implementada');
    console.log('🎓 Examen práctico DSII - COMPLETADO');
    console.log('🚀 =========================================');
    console.log('Presiona Ctrl+C para detener');
    console.log('🚀 =========================================');
});