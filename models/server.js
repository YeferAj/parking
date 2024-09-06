import express from 'express';
import 'dotenv/config'; // Cargar variables de entorno desde .env
import dbConnection from '../database/config.js';
import vehicleRoutes from '../routes/vehicleRoute.js';
import ownerRoutes from '../routes/ownerRoute.js';
import employeeRoutes from '../routes/employeeRoute.js';

export default class Server {
    constructor() {
        this.app = express();  // Crear una nueva aplicación Express
        this.port = process.env.PORT || 3000; // Puerto desde .env o por defecto 3000
        this.dbConnect();  // Conectar a la base de datos
        this.middlewares();  // Aplicar middlewares
        this.routes();  // Configurar las rutas
    }

    // Método para conectar a la base de datos
    async dbConnect() {
        await dbConnection();
    }

    // Aplicar middlewares
    middlewares() {
        this.app.use(express.json()); // Middleware para parsear JSON
    }

    //Configurar las rutas de la API
    routes() {
        this.app.use('/api/vehicles', vehicleRoutes);
        this.app.use('/api/owners', ownerRoutes);
        this.app.use('/api/employees', employeeRoutes);
    }

    // Método para levantar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
