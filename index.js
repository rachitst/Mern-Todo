import express from "express";
import cors from 'cors'
import Connection from "./database/db.js";
import Routes from "./routes/route.js"
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)

const __dirname = path.dirname(__filename);
console.log('directory-name : ', __dirname);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/', Routes)

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });

const PORT = 8000;
Connection();
app.listen(PORT,()=>console.log(`Server running on Port ${PORT}`));