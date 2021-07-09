import React, { useState } from "react";
import axios from "axios";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState([]);
  const [book, setBook] = useState([]);
  const [mealType, setMealType] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);

  const sendDetailsToServer = (e) => {
    e.preventDefault();
    const data = {
      recipeName: recipeName,
      book: book,
      mealType: mealType,
      pageNumber: pageNumber,
    };
    console.log(data);
    axios({
      method: "POST",
      url: "http://localhost:3000/addrecipe",
      mode: "cors",
      data: data,
    });
  };

  const handleSubmit = (event) => {
    if (event.target.id === "recipeName") {
      setRecipeName(event.target.value);
    } else if (event.target.id === "book") {
      setBook(event.target.value);
    } else if (event.target.id === "mealType") {
      setMealType(event.target.value);
    } else if (event.target.id === "pageNumber") {
      setPageNumber(event.target.value);
    }
  };

  return (
    <div className="addRecipeSection">
      <form className="recipeCompose" onSubmit={sendDetailsToServer}>
        <input
          id="recipeName"
          onChange={handleSubmit}
          type="text"
          className="formInput"
          placeholder="Recipe Name"
        ></input>
        <input
          id="book"
          onChange={handleSubmit}
          type="text"
          className="formInput"
          placeholder="Book"
        ></input>
        <input
          id="mealType"
          onChange={handleSubmit}
          type="text"
          className="formInput"
          placeholder="Meal Type"
        ></input>
        <input
          id="pageNumber"
          onChange={handleSubmit}
          type="text"
          className="formInput"
          placeholder="Page Number"
        ></input>

        <div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
