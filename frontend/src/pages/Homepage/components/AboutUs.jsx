import React from "react";
import aboutUsImage from '../../../assets/images/homepage/aboutus.jpeg';

const AboutUs = () => {
  return (
    <section className="flex items-center justify-between p-10 px-[20%] bg-white min-h-[600px]">
      <div className="flex-1 relative">
        {/* Image */}
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full h-[300px] rounded-[10px] object-cover"
        />
        {/* Contact Info */}
        <div className="absolute bottom-[-20px] right-[-20px] bg-[#333] text-white p-5 rounded-[8px] text-sm shadow-lg z-10">
          <h3 className="text-base mb-2.5">ぜひ私たちを訪れてください。</h3>
          <p className="my-1.5">📞 (+84) 123456789</p>
          <p className="my-1.5">📧 sumimasen@gmail.com</p>
          <p className="my-1.5">📍 Hai Ba Trung - Ha Noi</p>
        </div>
      </div>
      <div className="flex-1 m-5 pl-5">
        <h2 className="text-2xl text-[#333] mb-5">私たちはあなたの家族のために健康的な食べ物を提供します。</h2>
        <p className="text-base text-[#555] leading-[1.6] mb-[30px]">
          私たちの物語は、洗練された食事、卓越したサービス、活気ある雰囲気を融合させたユニークなダイニング体験を創造するというビジョンから始まりました。
          他の豊かな料理文化に触発され、私たちは地元のルーツを尊重しながら、グローバルな味覚を取り入れることを目指しています。
        </p>
        <button className="py-3 px-5 text-base bg-transparent text-[#333] border border-[#333] rounded-md cursor-pointer">
          私たちについてもっと
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
