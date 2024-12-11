// ReviewPage.jsx
import React from "react";

const ReviewPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
     
      {/* Main Content */}
      <main className="container mx-auto py-16">
        <h1 className="text-3xl text-center font-bold mb-8">評価</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <label className="block text-gray-700 text-lg mb-2">星評価</label>
          <select className="w-full border border-gray-300 rounded-lg p-2 mb-4">
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>
          <label className="block text-gray-700 text-lg mb-2">コメント</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Write your message"
          ></textarea>
          <button className="w-full bg-red-800 text-white py-2 rounded-full">
            Send
          </button>
        </div>
      </main>

      {/* Contact Information */}
      <div className="bg-gray-100  py-32">
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

export default ReviewPage;