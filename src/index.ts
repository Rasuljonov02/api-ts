import express from "express";
import cors from "cors";
import { auth } from "routes";
import { connect } from "./db";

const app = express();

app.use(express.json()); // req.body parsing for application/json
app.use(cors()); // Enable All CORS Requests

app.use("/api/auth", auth);

connect();

const PORT = 4000;

app.listen(PORT, () => console.log(`Server on port ${PORT}...`));

/**
 *
 *
 */
