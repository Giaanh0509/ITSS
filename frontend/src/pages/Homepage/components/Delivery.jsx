import React from "react";
import delivery1 from '../../../assets/images/homepage/delivery1.jpeg';
import delivery2 from '../../../assets/images/homepage/delivery2.jpeg';
import delivery3 from '../../../assets/images/homepage/delivery3.jpeg';

const Delivery = () => {
  return (
    <section className="flex items-center justify-between px-[10%] py-[60px] bg-[#f8f8f8] min-h-[700px]">
      <div className="flex-1 flex gap-5">
        {/* Large image on the left */}
        <div
          className="flex-[2] h-[400px] rounded-[10px] bg-center bg-cover"
          style={{ backgroundImage: `url(${delivery1})` }}
        ></div>
        {/* Two smaller images on the right */}
        <div className="flex-1 flex flex-col gap-5">
          <div
            className="flex-1 rounded-[10px] bg-center bg-cover"
            style={{ backgroundImage: `url(${delivery2})` }}
          ></div>
          <div
            className="flex-1 rounded-[10px] bg-center bg-cover"
            style={{ backgroundImage: `url(${delivery3})` }}
          ></div>
        </div>
      </div>
      <div className="flex-1 pl-5">
        <h2 className="text-[24px] text-[#333] mb-5">市内で最速のフードデリバリー</h2>
        <p className="text-base text-[#555] mb-5 leading-[1.6]">
          私たちのビジュアルデザイナーを使えば、デスクトップ用のカスタムアプリを簡単に作成できます。
        </p>
        <ul className="list-none p-0">
          <li className="text-base text-[#333] mb-2.5 flex items-center">📦 30分以内に配達</li>
          <li className="text-base text-[#333] mb-2.5 flex items-center">💲 最高のお得情報と価格</li>
          <li className="text-base text-[#333] mb-2.5 flex items-center">🛒 オンラインサービスをご利用いただけます</li>
        </ul>
      </div>
    </section>
  );
};

export default Delivery;
