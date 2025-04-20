import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running On Port ${process.env.PORT}`);
});

app.get("/", (req, res) => res.send("App is Running"));