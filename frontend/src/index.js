import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from './components/DeleteRecipe';
import EditRecipe from './components/EditRecipe';
import ShoppingList from './components/ShoppingList';
import HomePage from './components/HomePage';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/AddRecipe" element={<AddRecipe />}/>
    <Route path="/DeleteRecipe" element={<DeleteRecipe />}/>
    <Route path="/EditRecipe" element={<EditRecipe />}/>
    <Route path="/ShoppingList" element={<ShoppingList />}/>
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();