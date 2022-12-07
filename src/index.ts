import express, {Router} from "express";
import cookieParser from "cookie-parser";
import {Model} from "objection";
import Knex from "knex";
import routes from "./routes/index";
import bodyParser from "body-parser";
import cors from "cors";

var knexConfiig = require("../knexfile");
let knex;
let url: string | string[];
if (process.env.NODE_ENV == "production") {
	knex = Knex(knexConfiig.production);
	url = "https://sjsquad.herokuapp.com";
} else {
	knex = Knex(knexConfiig.development);
	url = "http://localhost:4200";
}

Model.knex(knex);

const PORT = process.env.PORT || 5005;
const app = express();
var distDir = __dirname + "/dist/";

app.set("trust proxy", 1); // trust first proxy
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", url);
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", ["GET","POST","PUT","PATCH","DELETE"]);
	res.setHeader("Access-Control-Allow-Headers",["X-Request","X-Requested-With","Content-Type","Cookie"]);
	res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");

	next();
});
var corsOptions = {
	origin: url,
	optionsSuccessStatus: 200, // some legacy browsers, choke on 204
};
app.use(cors(corsOptions));
app.all("/*", function(req, res, next) {
	if (req.method.toLowerCase() !== "options") {
	  return next();
	}
	return res.send(204);
  });
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static(distDir));
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`);
});
