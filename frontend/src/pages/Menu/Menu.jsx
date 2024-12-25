import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [foodItems, setFoodItems] = useState([]); // State to store food data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [selectedTag, setSelectedTag] = useState("all"); // State to track selected tag
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const [itemsPerPage, setItemsPerPage] = useState(8); // Number of items to show per page

  // Fetch all food items when the component mounts
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/menu"); // Base endpoint to fetch all foods
        if (!response.ok) {
          throw new Error("Failed to fetch food items");
        }
        const data = await response.json();
        setFoodItems(data); // Set all food items
      } catch (error) {
        console.error("Error fetching food items:", error);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchFoodItems();
  }, []);

  // Fetch foods by tag when a tag is selected
  const handleTagChange = async (tagName) => {
    setLoading(true); // Show loading indicator
    setSelectedTag(tagName); // Update selected tag
    setCurrentPage(1); // Reset to page 1 when a new tag is selected

    const endpoint =
        tagName === "all"
            ? "http://localhost:8080/menu"
            : `http://localhost:8080/menu/by-tag?tagName=${tagName}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setFoodItems(data); // Set filtered food items
    } catch (error) {
      console.error("Error fetching foods by tag:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get the items to display for the current page (sliding window)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Determine total pages
  const totalPages = Math.ceil(foodItems.length / itemsPerPage);

  return (
      <div className="font-sans">
        {/* Menu Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-center text-6xl mb-6">メニュー</h1>
            <p className="text-center text-gray-600 mb-10">
              私たちは、真心の料理とともに笑顔を提供します。
              <br />
              良い食事は幸せな生活を作ります。
            </p>

            {/* Categories (Tags) */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                  onClick={() => handleTagChange("all")}
                  className={`px-4 py-2 ${
                      selectedTag === "all" ? "bg-red-500 text-white" : "border text-gray-700"
                  } rounded-full`}
              >
                全部
              </button>
              <button
                  onClick={() => handleTagChange("meal_breakfast")}
                  className={`px-4 py-2 ${
                      selectedTag === "meal_breakfast" ? "bg-red-500 text-white" : "border text-gray-700"
                  } rounded-full`}
              >
                朝食
              </button>
              <button
                  onClick={() => handleTagChange("meal_lunch")}
                  className={`px-4 py-2 ${
                      selectedTag === "meal_lunch" ? "bg-red-500 text-white" : "border text-gray-700"
                  } rounded-full`}
              >
                主菜
              </button>
              <button
                  onClick={() => handleTagChange("type_drink")}
                  className={`px-4 py-2 ${
                      selectedTag === "type_drink" ? "bg-red-500 text-white" : "border text-gray-700"
                  } rounded-full`}
              >
                飲み物
              </button>
              <button
                  onClick={() => handleTagChange("type_dessert")}
                  className={`px-4 py-2 ${
                      selectedTag === "type_dessert" ? "bg-red-500 text-white" : "border text-gray-700"
                  } rounded-full`}
              >
                デザート
              </button>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentItems.map((item) => (
                  <Link
                      to={`/foods/${item.id}`} // Navigate to food detail page
                      key={item.id}
                      className="bg-white rounded-lg border-1 border-gray-300 overflow-hidden transform transition-all hover:scale-105 no-underline"
                  >
                    <div className="flex flex-col justify-center items-center">
                      {item.imageBase64 && (
                          <img
                              src={`data:image/jpeg;base64,${item.imageBase64}`} // Render Base64 image
                              alt={item.name}
                              className="w-full h-48 object-cover"
                          />
                      )}
                      <div className="p-6 text-center flex flex-col justify-between">
                        <p className="text-2xl font-semibold text-red-800 mb-4">{`$${item.price}`}</p>
                        <h3 className="text-xl text-black font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-2 break-words">{item.description}</p>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border text-gray-700 rounded-full"
              >
                前へ
              </button>
              <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border text-gray-700 rounded-full"
              >
                次へ
              </button>
            </div>
          </div>
        </section>

        {/* App Ordering Section */}
        <section className="py-48 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section: Title and Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                アプリを通じて注文できます。
              </h2>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                deserunt sed voluptate adipisci iste tenetur.
              </p>
            </div>

            {/* Right Section: App Logos */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF5RJaD61rIJ9z54Dk8EjnHJ6x3mn4jr9cg&s"
                  alt="Uber Eats"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="https://about.grubhub.com/wp-content/uploads/2021/12/GrubHub_Logo.jpeg"
                  alt="GrubHub"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rw84KyxhXIVmdRRgeUx7rFyAbo67BiBmLw&s"
                  alt="Postmates"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh9EH_5d7v2C7Ng0FWfa2q0-Mqb4Zrz1lYw&s"
                  alt="DoorDash"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="data:image/jpeg;base64,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"
                  alt="Foodpanda"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="https://mitchellake.com/wp-content/uploads/2022/07/Deliveroo-logo.png"
                  alt="Deliveroo"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="https://mms.businesswire.com/media/20210331005579/en/868438/5/instacart-logo-wordmark-4000x1600-e4f3c6f.jpg"
                  alt="Instacart"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JgBDTWdnu_F2t8_ypWi7Af-GdFE4Go9-TA&s"
                  alt="Just Eat"
                  className="w-24 h-10 object-contain"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 py-28 ">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
            <div className=" space-y-4">
              <h2 className="text-5xl ">大切なお客様への少しの情報</h2>
              <p className="text-gray-600">
                私たちは、お客様に真心を込めてサービスを提供することを目指しています。
                全ての料理が特別なスタッフから、あなたにとって忘れられないイベントを作り出します。
              </p>
              <div className="grid grid-cols-2 gap-6 ">
                <div className="bg-white text-center py-10">
                  <h3 className="text-4xl font-bold text-gray-800">3</h3>
                  <p className="text-gray-600">場所</p>
                </div>
                {/* Statistic 2 */}
                <div className="bg-white text-center py-10">
                  <h3 className="text-4xl font-bold text-gray-800">1995</h3>
                  <p className="text-gray-600">設立された</p>
                </div>
                {/* Statistic 3 */}
                <div className="bg-white text-center py-10">
                  <h3 className="text-4xl font-bold text-gray-800">65+</h3>
                  <p className="text-gray-600">スタッフメンバー</p>
                </div>
                {/* Statistic 4 */}
                <div className="bg-white text-center py-10">
                  <h3 className="text-4xl font-bold text-gray-800">100%</h3>
                  <p className="text-gray-600">満足した顧客</p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                  src="https://img.freepik.com/free-photo/mid-shot-man-spreading-tomato-sauce-pizza-dough_23-2148785684.jpg"
                  alt="About us"
                  className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
  );
};

export default Menu;