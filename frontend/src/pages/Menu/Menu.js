import React from "react";

const Menu = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Fried Eggs",
                price: "$9.99",
                image: "/fried-eggs.jpg",
                description: "卵、レタス、そして愛の味付け。",
              },
              {
                name: "Hawaiian Pizza",
                price: "$15.99",
                image: "/hawaiian-pizza.jpg",
                description: "ジューシーなピザが大人気。",
              },
              {
                name: "Martinez Cocktail",
                price: "$7.25",
                image: "/martinez-cocktail.jpg",
                description: "素晴らしい夜に乾杯。",
              },
              {
                name: "Butterscotch Cake",
                price: "$20.99",
                image: "/butterscotch-cake.jpg",
                description: "甘党必見のケーキ。",
              },
              {
                name: "Mint Lemonade",
                price: "$6.89",
                image: "/mint-lemonade.jpg",
                description: "爽やかな味わい。",
              },
              {
                name: "Chocolate Ice Cream",
                price: "$18.05",
                image: "/chocolate-icecream.jpg",
                description: "最高のデザート。",
              },
              {
                name: "Cheese Burger",
                price: "$12.55",
                image: "/cheese-burger.jpg",
                description: "ジューシーな一口。",
              },
              {
                name: "Classic Waffles",
                price: "$12.99",
                image: "/classic-waffles.jpg",
                description: "甘い幸福感。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-red-500 font-bold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
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
              src="pic.jpg"
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
