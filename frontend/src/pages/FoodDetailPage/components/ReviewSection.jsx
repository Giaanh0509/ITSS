import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // Import star icons
import { useNavigate } from "react-router-dom";

const ReviewSection = ({ foodId, onRatingUpdate }) => {
  const [reviews, setReviews] = useState([]); // To store reviews for the current food item
  const [totalPages, setTotalPages] = useState(0); // To manage pagination
  const [page, setPage] = useState(0); // Current page for pagination
  
  const navigate = useNavigate();

  // Fetch reviews for the current food item
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/reviews/food/${foodId}?page=${page}&size=4`
        );

        // Check if reviews are available
        if (response.data && Array.isArray(response.data.content)) {
          setReviews(response.data.content);
          setTotalPages(response.data.page.totalPages);
          const totalStars = response.data.content.reduce(
              (acc, review) => acc + review.star,
              0
          );
          const avgRating =
              response.data.content.length > 0
                  ? totalStars / response.data.content.length
                  : 0;

          // Pass average rating back to parent
          if (onRatingUpdate) {
            onRatingUpdate(avgRating);
          }
        } else {
          console.error("Error: Reviews not found.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [foodId, page, onRatingUpdate]); // Re-run the effect if foodId or page changes

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1; // Months are 0-indexed in JavaScript
    const day = d.getDate();
    return `${year}年${month}月${day}日`;
  };

  // Helper function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="inline-flex">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  const handlePageChange = (newPage) => {
    setPage(newPage); // Change the page for pagination
  };

  return (
    <div className="m-16 mt-20">
      <div className="flex flex-col items-center mb-8">
      <button
          onClick={() => navigate(`/reviews/${foodId}`)}
          className="bg-white border-2 border-black text-black font-bold text-3xl py-3 px-8 rounded-full mb-6 hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          評価を追加する
        </button>

        <p className="text-black text-lg mt-4">
            この料理を試しになって場合、他の方を参考
            <br />
            になるように、ぜひご感想をお聞かせください。
          </p>

        {/* Display reviews */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4">
                  <p>
                    <strong>{review.username}</strong>
                  </p>
                  <div className="mb-3">
                    {renderStars(review.star)} {/* Display the star rating */}
                  </div>
                  <p>{review.comment}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(review.date)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
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
    </div>
  );
};

export default ReviewSection;
