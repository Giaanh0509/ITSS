import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons
import avatarImage from '../../../assets/images/homepage/mockavatar.png';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      quote: "最高のレストラン",
      feedback:
        "昨晩、当店で食事をし、私たちは本当に驚きました。入った瞬間から、私たちは心地よい雰囲気に包まれ、温かい笑顔で迎えられました。",
      name: "陸葵",
      rating: 4.5
    },
    {
      id: 2,
      feedback:
        "当店はすべての面で私の期待を超えました。雰囲気は居心地が良くリラックスしており、私たちの記念日ディナーにぴったりの場所でした。",
      name: "緑",
      rating: 5
    },
    {
      id: 3,
      feedback:
        "当店での料理体験は他に比べるものがありません。雰囲気は活気に満ちており、料理は素晴らしいものでした。食事は私たちの夜のハイライトでした。",
      name: "代子",
      rating: 3.5
    },
  ];

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
            key={feedback.id}
          >
            {/* Display the star rating */}
            <div className="mb-3 d">
              {renderStars(feedback.rating)}
            </div>
            <p className="text-sm text-[#555] mb-5 leading-[1.6]">{feedback.feedback}</p>
            <div className="flex items-center">
              <img
                src={avatarImage}
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-2.5 object-cover"
              />
              <div className="text-sm text-[#888]">
                <span className="font-bold block">{feedback.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
