import express from "express";
import db from "./db/db.js";
import router from "./routes/routes.js";
import cors from "cors";
/////////////////////////////////////////////////////

const app = express();
app.use(cors());
app.use(express.json( { extended:true } ));
app.use(express.urlencoded( { extended:true }));
app.use("/",router);

db();
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`) );
