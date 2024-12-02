import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetailPage = () => {
  const { id } = useParams(); // Get the food ID from the URL
  const [food, setFood] = useState(null);

  // Fetch food details based on the food ID
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/foods/${id}`);
        if (!response.ok) {
          throw new Error("Food not found");
        }
        const data = await response.json();
        setFood(data);  // Store the fetched food data
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };

    fetchFoodDetails();
  }, [id]);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{food.name}</h1>
      {food.imageBase64 && (
        <img
          src={`data:image/jpeg;base64,${food.imageBase64}`}  // Use the Base64 image string
          alt={food.name}
          className="w-64 h-64 object-cover rounded-md mb-6"
        />
      )}
      <p className="text-xl mb-4">{food.description}</p>
      <p className="text-lg mb-4">Price: ${food.price}</p>
      <p className="text-lg mb-4">Location: {food.location}</p>
      <p className="text-lg">Rating: {food.rating}</p>
    </div>
  );
};

export default FoodDetailPage;
