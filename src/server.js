import http from "http";
import express from 'express';

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


const server = http.createServer(app);

const handleListener = () => console.log("Listening on http://localhost:3000");

server.listen(3000, handleListen);