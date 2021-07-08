import './App.css';
import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from './components/DeleteRecipe';
import EditRecipe from './components/EditRecipe';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
    <h1>Welcome to the Shopping List App</h1>
    <AddRecipe/>
    <DeleteRecipe/>
    <EditRecipe/>
    <ShoppingList/>
    </div>

  );
}

export default App;
