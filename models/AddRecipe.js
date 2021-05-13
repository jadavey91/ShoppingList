const mongoose = require("mongoose");

const AddRecipe = new mongoose.Schema({
  recipeName: { type: String, required: true },
  book: { type: String, required: true },
  mealType: { type: String, required: true },
  pageNumber: { type: Number, required: true },
});

module.exports = mongoose.model("addrecipe", AddRecipe);
