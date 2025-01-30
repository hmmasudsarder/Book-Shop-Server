import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function server() {
    try {
        mongoose.connect(config.database_url as string)
        app.listen(config.port, () => {
            console.log(`Server is Running ${config.port} 🏃‍♂️‍➡️`)
        })
    } catch (error) {
        console.log(error)
    }
}

server()