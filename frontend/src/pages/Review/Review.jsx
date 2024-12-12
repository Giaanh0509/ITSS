import React, { useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"; // Ensure Axios is installed and imported
import {useNavigate} from "react-router-dom";

const Review = () => {


    const  {foodId} = useParams();
    const [rating, setRating] = useState(5); // Default rating is 5 stars
    const [comment, setComment] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    // Handle star click to update rating
    const handleRatingClick = (value) => {
        setRating(value);
    };

    // Submit review to backend
    const handleSubmit = async () => {
        try {
            const reviewData = {
                username: localStorage.getItem("username"),
                foodId, // Pass the food ID
                star: rating,
                comment,
                date: new Date(), // Current date
            };

            await axios.post("http://localhost:8080/reviews", reviewData);
            setComment(""); // Clear the comment field
            setTimeout(() => {
                navigate(-1); // Navigate back to the previous page
            }, 700);
        } catch (error) {
            setErrorMessage("Failed to submit review. Please try again.");
            console.error("Review submission error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Main Content */}
            <main className="container mx-auto py-16">
                <h1 className="text-3xl text-center font-bold mb-8">評価</h1>
                <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg">
                    <label className="block text-gray-700 text-lg mb-2">星評価</label>
                    <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleRatingClick(star)}
                                className={`cursor-pointer text-3xl ${
                                    star <= rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <label className="block text-gray-700 text-lg mb-2">コメント</label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                        placeholder="Write your message"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-red-800 text-white py-2 rounded-full"
                    >
                        Send
                    </button>
                    {errorMessage && (
                        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                    )}
                </div>
            </main>

            {/* Contact Information */}
            <div className="bg-gray-100 py-32">
                <div className="container grid grid-cols-3 mx-auto text-center space-y-4">
                    <p className="text-lg grid grid-rows-2">
                        <span className="font-bold">お電話ください：</span>
                        <a href="tel:+84123456789" className="text-red-500">
                            (+84) 123456789
                        </a>
                    </p>
                    <p className="text-lg grid grid-rows-2">
                        <span className="font-bold">営業時間：</span> 月曜日～金曜日:
                        午前9時～午後6時
                        <br />
                        土曜日、日曜日: 午前10時～午後6時
                    </p>
                    <p className="text-lg grid grid-rows-2">
                        <span className="font-bold">私たちの場所：</span>
                        <a>Hai Ba Trung - Ha Noi</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;
