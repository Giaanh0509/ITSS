import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Login/AuthProvider";
import axios from "../../axios";
import "./Favorite.css";
import Footer from "../../components/Footer";

const FavoriteFoods = () => {
    const { authState } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    const fetchUserFavorites = async () => {
        if (!authState.username) {
            console.warn("authState.username is null or undefined");
            return;
        }

        try {
            const response = await axios.get(`/favorites/user/${authState.username}`);
            console.log("API Response:", response.data); // Debugging log
            if (response.data && Array.isArray(response.data.content)) {
                setFavorites(response.data.content); // Access content array
                console.log("Favorites state:", response.data.content); // Debugging log
            } else {
                alert("No favorites found.");
            }
        } catch (error) {
            console.error("Error fetching favorites:", error);
        }
    };

    useEffect(() => {
        fetchUserFavorites();
    }, [authState.username]);

    const handleDelete = async (username, foodId) => {
        console.log("Deleting favorite with:", { username, foodId }); // Debugging log
        try {
            const response = await axios.delete("/favorites/delete", {
                params: {
                    username: encodeURIComponent(username),
                    foodId: encodeURIComponent(foodId),
                },
            });
            console.log("Delete API Response:", response.data); // Debugging log
            if (response.status === 200) {
                alert("Favorite deleted successfully!");
                window.location.reload(); // Refresh the page after deletion
            }
        } catch (error) {
            console.error("Error deleting favorite:", error);
            alert("Error occurred while deleting the favorite.");
        }
    };

    return (
        <div className="favorites-container flex flex-col items-center">
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
                                <h3>{favorite.name}</h3>
                                <p>{favorite.description}</p>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(authState.username, favorite.foodId || favorite.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>なし</p>
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
