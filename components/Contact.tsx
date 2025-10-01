"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("상담 신청이 접수되었습니다. 24시간 이내에 연락드리겠습니다.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">무료 법률 상담</h2>
          <p className="text-xl text-gray-300">
            24시간 이내 전문 변호사가 직접 연락드립니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">상담 신청서</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">성함 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none transition"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">연락처 *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none transition"
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">이메일</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">상담 분야 *</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none transition"
                >
                  <option value="">선택하세요</option>
                  <option value="criminal">형사 변호</option>
                  <option value="civil">민사 소송</option>
                  <option value="family">가사 소송</option>
                  <option value="corporate">기업 법무</option>
                  <option value="administrative">행정 소송</option>
                  <option value="international">국제 소송</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">상담 내용 *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none transition resize-none"
                  placeholder="상담하실 내용을 간략히 작성해주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
              >
                무료 상담 신청하기
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold mb-1">주소</h4>
                    <p className="text-gray-300">
                      서울특별시 강남구 테헤란로 123<br />
                      법조타워 15층
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">📞</div>
                  <div>
                    <h4 className="font-semibold mb-1">전화</h4>
                    <p className="text-gray-300">
                      대표: 02-1234-5678<br />
                      긴급: 010-9876-5432 (24시간)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">✉️</div>
                  <div>
                    <h4 className="font-semibold mb-1">이메일</h4>
                    <p className="text-gray-300">info@kimlee-law.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">🕐</div>
                  <div>
                    <h4 className="font-semibold mb-1">업무시간</h4>
                    <p className="text-gray-300">
                      평일: 09:00 - 18:00<br />
                      토요일: 09:00 - 13:00<br />
                      일요일/공휴일: 휴무
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 rounded-xl p-8 text-slate-900">
              <h3 className="text-2xl font-bold mb-4">빠른 상담 TIP</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>상담 내용을 구체적으로 작성하실수록 정확한 답변이 가능합니다</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>관련 서류가 있다면 상담 시 지참해주세요</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>초기 상담은 무료이며, 비밀이 철저히 보장됩니다</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}