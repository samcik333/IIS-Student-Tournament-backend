import express, { Router } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { Model } from "objection";
import Knex from "knex";
import knexConfiig from "../knexfile";
import routes from "./routes/index";
import bodyParser from "body-parser";
import cors from "cors";

const knex = Knex(knexConfiig.development);

Model.knex(knex);

const PORT = process.env.PORT || 5005;
const app = express();
var distDir = __dirname + "/dist/";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static(distDir));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
