import { useState } from "react";
import { Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const deleteFood = (name) => {
    setFoodList(foodList.filter((food) => food.name !== name));
  };

  const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add New Food"}
      </Button>

      {showForm && <AddFoodForm addFood={addFood} />}
      <Search onSearch={setSearchTerm} />

      {filteredFoods.length > 0 ? (
        filteredFoods.map((food) => (
          <FoodBox key={food.name} food={food} onDelete={deleteFood} />
        ))
      ) : (
        <p>No more food left. Add some!</p>
      )}
    </div>
  );
}

export default App;
