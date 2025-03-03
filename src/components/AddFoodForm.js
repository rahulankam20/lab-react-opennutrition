import { useState } from "react";
import { Input, Button, Form } from "antd";

function AddFoodForm({ addFood }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.image || !form.calories || !form.servings) return;
    addFood({ ...form, calories: Number(form.calories), servings: Number(form.servings) });
    setForm({ name: "", image: "", calories: "", servings: "" });
  };

  return (
    <Form layout="inline">
      <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <Input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <Input name="calories" placeholder="Calories" type="number" value={form.calories} onChange={handleChange} />
      <Input name="servings" placeholder="Servings" type="number" value={form.servings} onChange={handleChange} />
      <Button type="primary" onClick={handleSubmit}>Add Food</Button>
    </Form>
  );
}

export default AddFoodForm;
