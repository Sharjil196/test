import express from "express";

const app = express();

app.get("/", (req, res) => {
     res.json({
          name: "Sharjil",
          age: "18"
     });
})


app.listen(process.env.PORT || 3000,);