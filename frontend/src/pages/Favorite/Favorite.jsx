import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Login/AuthProvider";
import axios from "../../axios";
import "./Favorite.css";

import Footer from "../../components/Footer";

const FavoriteFoods = () => {
  const { authState } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const response = await axios.get(`/favorites/user/${authState.username}`);
        if (response.data) {
          setFavorites(response.data);
        } else {
          alert("No favorites found.");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
        alert("Failed to fetch favorites.");
      }
    };

    fetchUserFavorites();
  }, [authState.username]);

  return (
    <div className="favorites-container">
      <h1>{authState.username}のお気に入り料理</h1>
      <p>こちらは家族や友人と共有するための美味しい料理のコレクション</p>
      <div className="favorites-grid">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div className="favorite-item" key={favorite.id}>
              {favorite.imageBase64 ? (
                <img
                  src={`data:image/jpeg;base64,${favorite.imageBase64}`}
                  alt={favorite.name}
                  className="favorite-image"
                />
              ) : (
                <div className="placeholder-image">No Image</div>
              )}
              <div className="favorite-info">
                <h3>
                  {favorite.name} {favorite.nameJp && <span>({favorite.nameJp})</span>}
                </h3>
                <p>{favorite.description}</p>
                <p>Rating: {favorite.rating}</p>
                <p>Price: ${favorite.price}</p>
                <p>Location: {favorite.location}</p>
                <p>Added on: {new Date(favorite.addDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
    </div>
  );
};

const Favorite = () => {
  return (
    <div>
      <FavoriteFoods />
      <Footer />
    </div>
  );
};

export default Favorite;
