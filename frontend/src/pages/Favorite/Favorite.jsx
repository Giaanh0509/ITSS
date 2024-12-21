import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Login/AuthProvider";
import axios from "../../axios";
import "./Favorite.css";
import Footer from "../../components/Footer";

const FavoriteFoods = () => {
    const { authState } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
const Favorite = () => {
  const { authState } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

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
  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const response = await axios.get(
          `/favorites/user/${authState.username}?page=${page}&size=8`
        );
        if (response.data && Array.isArray(response.data.content)) {
          setFavorites(response.data.content);
          setTotalPages(response.data.page.totalPages);
        } else {
          console.error("Error: No favorites.");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
        alert("Failed to fetch favorites.");
      }
    };

        fetchUserFavorites();
    }, [authState.username]);

    // const handleDelete = async (username, id) => {
    //     console.log("Deleting favorite with:", { username, id });
    //     console.log("authState:", authState);

    //     try {
    //         const response = await axios.delete("/favorites/delete", {
    //             params: {
    //                 username: encodeURIComponent(username),
    //                 foodId: encodeURIComponent(id),
    //             },
    //         });
    //         if (response.status === 200) {
    //             alert("Favorite deleted successfully!");
    //             setFavorites(favorites.filter((fav) => fav.id !== id));
    //         } else {
    //             alert("Failed to delete favorite.");
    //         }
    //     } catch (error) {
    //         console.error("Error deleting favorite:", error);
    //         alert("Error occurred while deleting the favorite.");
    //     }
    // };
    const handleDelete = async (username, foodId) => {
      console.log("Deleting favorite with:", { username, foodId });
      try {
          const response = await axios.delete("/favorites/delete", {
              params: {
                  username: encodeURIComponent(username),
                  foodId: encodeURIComponent(foodId),
              },
          });
          if (response.status === 200) {
              alert("Favorite deleted successfully!");
              setFavorites(favorites.filter((fav) => fav.foodId !== foodId));
          }
      } catch (error) {
          console.error("Error deleting favorite:", error);
          alert("Error occurred while deleting the favorite.");
      }
    };
    fetchUserFavorites();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage); // Change the page for pagination
  };

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
                                <h3>{favorite.name}</h3>
                                <p>{favorite.description}</p>
                                <p>Rating: {favorite.rating}</p>
                                <p>Price: ${favorite.price}</p>
                                <p>Location: {favorite.location}</p>
                                <p>Added on: {new Date(favorite.addDate).toLocaleDateString()}</p>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(authState.username, favorite.foodId)}
                                >
                                    Delete
                                </button>
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
                <h3>
                  {favorite.name}{" "}
                  {favorite.nameJp && <span>({favorite.nameJp})</span>}
                </h3>
                <p>{favorite.description}</p>
                <p>Rating: {favorite.rating}</p>
                <p>Price: ${favorite.price}</p>
                <p>Location: {favorite.location}</p>
                <p>
                  Added on: {new Date(favorite.addDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex space-x-4 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`py-2 px-4 rounded-full border-2 ${
                page === index ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
