import React from "react";
import heroBanner from '../../../assets/images/homepage/hero-banner.png';

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center p-[60px] bg-[#fdfdfd] min-h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="max-w-[600px]">
        <h1 className="text-[36px] text-[#333] mb-5">ベトナムの味、もっと身近に</h1>
        <p className="text-[18px] text-[#555] mb-7.5">
          私たちの温かい料理の楽園で、魅力的な料理と忘れられない瞬間を発見してください。
        </p>
        <div className="flex justify-center gap-5">
          <button className="py-3 px-5 text-[16px] bg-[#c51d1d] text-white rounded-[20px] cursor-pointer">
            フィルター
          </button>
          <button className="py-[10px] px-5 text-[16px] bg-white text-[#333] border border-[#333] rounded-[20px] cursor-pointer">
            メニューを探る
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
