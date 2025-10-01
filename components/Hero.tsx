"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "정의와 신뢰의 법률 파트너",
      subtitle: "30년 전통, 승소율 95%의 송지훈 법률사무소",
      bg: "bg-gradient-to-r from-slate-900 to-slate-700"
    },
    {
      title: "24시간 긴급 법률상담",
      subtitle: "언제든지 연락주세요. 최고의 전문가가 대기하고 있습니다",
      bg: "bg-gradient-to-r from-slate-800 to-slate-600"
    },
    {
      title: "맞춤형 법률 솔루션",
      subtitle: "고객의 상황에 최적화된 전략적 접근",
      bg: "bg-gradient-to-r from-slate-700 to-slate-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative h-screen ${slides[currentSlide].bg} text-white transition-all duration-1000`}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
          {slides[currentSlide].subtitle}
        </p>
        <div className="space-x-4">
          <a 
            href="#contact" 
            className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105 inline-block"
          >
            무료 상담 신청
          </a>
          <a 
            href="#services" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition transform hover:scale-105 inline-block"
          >
            업무분야 보기
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-yellow-400 w-8" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}