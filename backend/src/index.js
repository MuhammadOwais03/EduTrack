import connection from "./db/dbConnection.js";
import dotenv from "dotenv";
import { app } from "./app.js";

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Use the port from the environment variable or default to 3001
const port = parseInt(process.env.PORT, 10) || 3001;

connection()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => console.log("MongoDB connection failed", err));
