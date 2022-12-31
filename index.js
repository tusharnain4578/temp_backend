const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "https://temp-frontend.onrender.com",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("its working! damnn good");
})


app.post("/", (req, res) => {
    const name = req.body.name;

    console.log(name);

    res.cookie('name', name, {
        secure: true,
        httpOnly: true
    });

    res.send("Cookie sent " + name);
})


app.listen(process.env.PORT || 8000, () => console.log("Express server running!"))
