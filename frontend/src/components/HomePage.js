import React from 'react';
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/ShoppingList">Create Shopping List</Link>
            </li>
            <li>
                <Link to="/AddRecipe">Add Recipe</Link>
            </li>
            <li>
            <Link to="/EditRecipe">Edit Recipe</Link>
            </li>
            <li>
            <Link to="/DeleteRecipe">Delete Recipe</Link>
            </li>
        </nav>
        <Outlet />
        </>
    )
};
export default HomePage;