import express, { Router } from "express";
import cookieParser from "cookie-parser";
import { Model } from "objection";
import Knex from "knex";
import knexConfiig from "../knexfile";
import routes from "./routes/index";
import bodyParser from "body-parser";
import cors from "cors";
let knex;
let url;
if (process.env.NODE_ENV == "production") {
  knex = Knex(knexConfiig.production);
  url = "https://sjs-squad.herokuapp.com";
} else {
  knex = Knex(knexConfiig.development);
  url = "http://localhost:4200";
}

Model.knex(knex);

const PORT = process.env.PORT || 5005;
const app = express();
var distDir = __dirname + "/dist/";

app.use(
  cors({
    origin: "http://localhost:4200",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
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
