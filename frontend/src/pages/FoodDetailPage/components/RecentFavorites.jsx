import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Login/AuthProvider";
import axios from "../../../axios";

const RecentFavoritesSection = ({ foodId }) => {
  const [recentFavorites, setRecentFavorites] = useState([]); // To store recent favorite foods
  const { authState } = useContext(AuthContext);
  const [alreadyExists, setAlreadyExists] = useState(false); 

  const handleAddFavorite = async () => {
    const today = new Date().toISOString().split("T")[0];

    try {
      const response = await axios.post(`http://localhost:8080/favorites/add`, {
        foodId,
        username: authState.username,
        date: today,
      });

      console.log(authState.username);

      if (response.status === 200) {
        alert("favorites added successfully");
        setAlreadyExists(false);
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setAlreadyExists(true);
      }
      else alert("Failed to add favorites");
      console.log(authState.username);
    }
  };

  // Fetch recent favorite foods
  useEffect(() => {
    const fetchRecentFavorites = async () => {
      try {
        const response = await fetch(`http://localhost:8080/favorites/recent?username=${authState.username}`);
        if (!response.ok) {
          throw new Error("Unable to fetch recent favorites");
        }
        const data = await response.json();
        setRecentFavorites(data); // Store the list of favorite foods
      } catch (error) {
        console.error("Error fetching recent favorites:", error);
      }
    };

    fetchRecentFavorites();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1; // Months are 0-indexed in JavaScript
    const day = d.getDate();
    return `${year}年${month}月${day}日`;
  };

  return (
    <div className="m-4">
      <div className="flex flex-col items-center mb-8">
        <button
          onClick={handleAddFavorite}
          className="bg-white border-2 border-black text-black font-bold text-3xl py-3 px-8 rounded-full mb-6 hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          お気に入りに追加
        </button>


        {/* Display message if already exists */}
        {alreadyExists && (
          <p className="text-red-500 text-lg mt-4">
            この料理はすでに お気に入り画面に存在します。
          </p>
        )}

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {recentFavorites.map((favorite, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Food Image */}
              <img
                src={`data:image/jpeg;base64,${favorite.imageBase64}`}
                alt={favorite.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{favorite.name}</h3>
                <p className="text-sm text-gray-600">
                  この料理をお気に入りリストに追加しました。
                </p>
                <p className="text-sm text-gray-500">
                  {formatDate(favorite.addDate)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentFavoritesSection;
