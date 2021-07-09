import {BrowserRouter, Route} from 'react-router-dom';
import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from './components/DeleteRecipe';
import EditRecipe from './components/EditRecipe';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Welcome to the Shopping List App</h1>
    <BrowserRouter>
    <Route exact path="/AddRecipe" component={AddRecipe}/>
    <Route exact path="/DeleteRecipe" component={DeleteRecipe}/>
    <Route exact path="/EditRecipe" component={EditRecipe}/>
    <Route exact path="/ShoppingList" component={ShoppingList}/>
    </BrowserRouter>
    {/* <AddRecipe/>
    <DeleteRecipe/>
    <EditRecipe/>
    <ShoppingList/> */}
    </div>

  );
}

export default App;
