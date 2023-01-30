const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

var value = {};
var newvalue = {};

app.post("/", (req, res) => {
    const name = req.body.name;
    value = { name };
    console.log(name);
});

// trying
app.post("/data", (req, res) => {
    const name = req.body.name;
    newvalue = { name };
    console.log(newvalue);
});

app.get("/jsondata", (req, res) => {
    res.json(newvalue);
});

//

app.get("/message", (req, res) => {
    res.json(value);
});

app.listen(3500, () => {
    console.log(`Server is running on port 3500.`);
});
