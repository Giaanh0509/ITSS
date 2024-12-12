import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import React Icons
import RecentFavoritesSection from "./components/RecentFavorites";
import ReviewSection from "./components/ReviewSection";

const FoodDetailPage = () => {
  const { id } = useParams(); // Get the food ID from the URL
  const [food, setFood] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  // Fetch food details based on the food ID
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/foods/${id}`);
        if (!response.ok) {
          throw new Error("Food not found");
        }
        const data = await response.json();
        setFood(data); // Store the fetched food data
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };

    fetchFoodDetails();
  }, [id]);

  // Function to render star ratings with React Icons
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 !== 0; // Check if there is a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="inline-flex items-center space-x-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar
            key={`full-${index}`}
            className="text-yellow-500 text-2xl hover:text-yellow-400 transition-all"
          />
        ))}
        {halfStar && (
          <FaStarHalfAlt className="text-yellow-500 text-2xl hover:text-yellow-400 transition-all" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar
            key={`empty-${index}`}
            className="text-gray-300 text-2xl hover:text-yellow-400 transition-all"
          />
        ))}
      </div>
    );
  };

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col mb-6">
          <h1 className="text-3xl font-semibold mb-4">{food.name}</h1>
          {food.imageBase64 && (
            <img
              src={`data:image/jpeg;base64,${food.imageBase64}`} // Use the Base64 image string
              alt={food.name}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
          )}
          <div>
            <h3 className="font-bold">説明</h3>
            <p className="text-xl mb-2">{food.description}</p>
            <p className="text-lg text-gray-600 mb-4">価格: {food.price}đ</p>
            <p className="text-lg text-gray-600 mb-2">場所: {food.location}</p>

            {/* Star Rating */}
            <div className="flex items-center space-x-2">
              {" "}
              {/* Added flex and space between items */}
              <p className="text-lg text-gray-600">評価:</p>
              {renderStars(averageRating)} {/* Render stars */}
            </div>
          </div>
        </div>
      </div>
      {/* Most recent added favorites */}
      <RecentFavoritesSection foodId = {parseInt(id)} />
      {/* Review section of each food */}
      <ReviewSection foodId = {parseInt(id)}
       onRatingUpdate={(avg) => setAverageRating(avg)}/>

    </>
  );
};

export default FoodDetailPage;
