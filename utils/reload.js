const livereload = require('livereload');

const server = livereload.createServer();
server.watch('../assets');
console.log('Reload server started...');
