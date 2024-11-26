import React from "react";
import logo from '../assets/images/homepage/logo.png';
import footer1 from '../assets/images/homepage/footer1.jpeg';
import footer2 from '../assets/images/homepage/footer2.jpeg';
import footer3 from '../assets/images/homepage/footer3.jpeg';
import footer4 from '../assets/images/homepage/footer4.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#494747] text-white py-10 px-12">
      <div className="flex flex-wrap justify-between gap-5">
        {/* Left Section */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center gap-2 mb-2.5">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-md"
            />
            <h2 className="text-2xl">ベトナムごはん</h2>
          </div>
          <p className="text-sm mb-5">
            新しい技術の時代に、私たちのアプリでベトナム料理の魅力を紹介します。
          </p>
          <div className="flex gap-2.5">
            <a href="#" className="text-white text-xl no-underline"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white text-xl no-underline"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white text-xl no-underline"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white text-xl no-underline"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg mb-2.5">ページ</h3>
          <ul className="list-none p-0">
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">ホーム</a></li>
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">メニュー</a></li>
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">おすすめ</a></li>
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">お気に入り</a></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg mb-2.5">ユーティリティページ</h3>
          <ul className="list-none p-0">
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">ここから始める</a></li>
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">スタイルガイド</a></li>
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">パスワード保護</a></li>
            <li className="mb-1.5"><a href="#" className="text-white text-sm no-underline">404 未検出</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg mb-2.5">私たちをInstagramでフォローしてください</h3>
          <div className="grid grid-cols-2 gap-7.5">
            <img
              src={footer1}
              alt="Instagram 1"
              className="w-full aspect-square rounded-md object-cover"
            />
            <img
              src={footer2}
              alt="Instagram 2"
              className="w-full aspect-square rounded-md object-cover"
            />
            <img
              src={footer3}
              alt="Instagram 3"
              className="w-full aspect-square rounded-md object-cover"
            />
            <img
              src={footer4}
              alt="Instagram 4"
              className="w-full aspect-square rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-5 border-t border-t-[#555] pt-2.5">
        <p>Copyright © 2024 すみませんチーム</p>
      </div>
    </footer>
  );
};

export default Footer;
