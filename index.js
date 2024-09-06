import Server from './models/server.js'; // Importar la clase Server

// Crear una instancia de Server, lo que iniciará la conexión a MongoDB y el servidor Express
const server = new Server();

// Iniciar el servidor
server.listen();
