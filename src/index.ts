import express from "express";
import cors from "cors";
import { connect } from "./db";
import { Auth,User } from "routes";

const app = express();

app.use(express.json()); // req.body parsing for application/json
app.use(cors()); // Enable All CORS Requests

app.use("/api/auth", Auth);
app.use("/api/user", User);
connect();

const PORT = 4000;

app.listen(PORT, () => console.log(`Server on port ${PORT}...`));

/**
 *
 *
 */
