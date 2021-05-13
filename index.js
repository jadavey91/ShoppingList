const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const AddRecipeRouter = require("./routes/AddRecipeRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


mongoose.connect(
  `mongodb+srv://jadavey:${process.env.password}@ShoppingList.y3x9v.mongodb.net/${process.env.mongoDB}?retryWrites=true&w=majority`, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB database connection established successfully!');
})

app.use("/addrecipe", AddRecipeRouter);

app.listen(5000, () => {
  console.log("online");
});

// app.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.write(JSON.stringify({ status: "Working" }));
//   res.end();
// });

console.log(process.env.username)
console.log(process.env.password)