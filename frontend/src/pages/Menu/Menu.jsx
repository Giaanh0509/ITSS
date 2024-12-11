import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [foodItems, setFoodItems] = useState([]); // State to store food data
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch food items from the backend
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/menu"); // Replace with your backend API URL
        if (!response.ok) {
          throw new Error("Failed to fetch food items");
        }
        const data = await response.json();
        setFoodItems(data); // Set food items
      } catch (error) {
        console.error("Error fetching food items:", error);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchFoodItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

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

            {/* Categories */}
            <div className="flex justify-center space-x-4 mb-8">
              <button className="px-4 py-2 bg-red-500 border-black text-white rounded-full">
                全部
              </button>
              <button className="px-4 py-2 border text-gray-700 rounded-full">
                朝食
              </button>
              <button className="px-4 py-2 border rounded-full text-gray-700">
                主菜
              </button>
              <button className="px-4 py-2 border rounded-full text-gray-700">
                飲み物
              </button>
              <button className="px-4 py-2 border rounded-full text-gray-700">
                デザート
              </button>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {foodItems.map((item) => (
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
          </div>
        </section>

        {/* App Ordering Section */}
        <section className="py-48 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                アプリを通じて注文できます。
              </h2>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                deserunt sed voluptate adipisci iste tenetur.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
              <img
                  src="/path-to-uber-eats-logo.png"
                  alt="Uber Eats"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-grubhub-logo.png"
                  alt="GrubHub"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-postmates-logo.png"
                  alt="Postmates"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-doordash-logo.png"
                  alt="DoorDash"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-foodpanda-logo.png"
                  alt="Foodpanda"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-deliveroo-logo.png"
                  alt="Deliveroo"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-instacart-logo.png"
                  alt="Instacart"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-just-eat-logo.png"
                  alt="Just Eat"
                  className="w-24 h-10 object-contain"
              />
              <img
                  src="/path-to-didi-food-logo.png"
                  alt="Didi Food"
                  className="w-24 h-10 object-contain"
              />
            </div>
          </div>
        </section>
      </div>
  );
};

export default Menu;
