import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import axios from '../../../axios';
import avatarImage from '../../../assets/images/homepage/mockavatar.png';

const CustomerFeedback = () => {
  
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    const response = await axios.get('/reviews/highest');

    setFeedbacks(response.data);
  }

  useEffect(() => {
    fetchFeedback();
  }, []);

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

  return (
    <section className="py-10 px-[20%] bg-white text-center min-h-[500px]">
      <h2 className="text-[28px] text-[#333] mb-[30px]">お客様のフィードバック</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 justify-center">
        {feedbacks.map((feedback) => (
          <div
            className="bg-[#f9f9f9] border border-[#ddd] rounded-[8px] p-5 shadow-md text-left flex flex-col justify-between"
            // key={feedback.id}
          >
            {/* Display the star rating */}
            <div className="mb-3 d">
              {renderStars(feedback.star)}
            </div>
            <p className="text-sm text-[#555] mb-5 leading-[1.6]">{feedback.comment}</p>
            <div className="flex items-center">
              <img
                src={avatarImage}
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-2.5 object-cover"
              />
              <div className="text-sm text-[#888]">
                <span className="font-bold block">{feedback.username}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
