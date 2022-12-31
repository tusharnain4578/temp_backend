const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("its working");
})


app.post("/", (req, res) => {
    const name = req.body.name;

    console.log(name);

    res.cookie('name', name, {
        httpOnly: true
    });

    res.send("Cookie sent " + name);
})


app.listen(process.env.PORT || 8000, () => console.log("Express server running!"))
