import dotenv from "dotenv";
import connection from "./db/dbConnection.js";
import { app } from "./app.js";
import { router } from "./routes/index.js";

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Use the port from the environment variable or default to 3000
const port = process.env.PORT || 3000;

app.use('/api', router);

connection()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on: ${port}`);
        });
    })
    .catch((err) => console.log("MongoDB connection failed", err));
