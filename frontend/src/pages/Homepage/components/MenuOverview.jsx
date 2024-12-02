import React from "react";

const MenuOverview = () => {
  const menuItems = [
    {
      id: 1,
      icon: "fas fa-coffee",
      title: "朝食",
      description:
        "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
    {
      id: 2,
      icon: "fas fa-utensils",
      title: "主菜",
      description:
        "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
    {
      id: 3,
      icon: "fas fa-glass-martini-alt",
      title: "飲み物",
      description:
        "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
    {
      id: 4,
      icon: "fas fa-ice-cream",
      title: "デザート",
      description:
        "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
  ];

  return (
    <section className="py-10 px-[10%] bg-[#f9f9f9] text-center">
      <h2 className="text-[28px] text-[#333] mb-7.5">メニューをご覧ください</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        {menuItems.map((item) => (
          <div
            className="bg-white border border-[#ddd] rounded-[8px] p-5 shadow-md text-center"
            key={item.id}
          >
            <i
              className={`${item.icon} text-[36px] text-[#e57373] mb-3.75`}
            ></i>
            <h3 className="text-[20px] text-[#333] mb-2.5">{item.title}</h3>
            <p className="text-sm text-[#666] mb-5">{item.description}</p>
            <p className="text-sm text-[#e57373] font-bold cursor-pointer">
              {item.buttonText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuOverview;
