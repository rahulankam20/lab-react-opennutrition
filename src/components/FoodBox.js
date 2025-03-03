import { Card, Button } from "antd";

function FoodBox({ food, onDelete }) {
  return (
    <Card title={food.name} style={{ width: 300, margin: 10 }}>
      <img src={food.image} width={100} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p><b>Total Calories: {food.calories * food.servings} kcal</b></p>
      <Button type="primary" danger onClick={() => onDelete(food.name)}>Delete</Button>
    </Card>
  );
}

export default FoodBox;
