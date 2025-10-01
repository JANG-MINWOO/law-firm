export default function Attorneys() {
  const attorneys = [
    {
      name: "송지훈",
      title: "대표 변호사",
      specialty: "형사법 전문",
      experience: "30년",
      education: ["서울대학교 법학과", "서울대학교 법학대학원", "미국 하버드 로스쿨 LL.M"],
      career: ["前 대검찰청 검사", "前 서울중앙지검 부장검사", "대한변호사협회 이사"],
      image: "👨‍⚖️"
    },
    {
      name: "이수진",
      title: "파트너 변호사",
      specialty: "기업법무 전문",
      experience: "25년",
      education: ["연세대학교 법학과", "연세대학교 법학대학원", "영국 케임브리지 대학 LL.M"],
      career: ["前 삼성그룹 법무팀장", "前 김&장 법률사무소 파트너", "한국기업법무협회 부회장"],
      image: "👩‍⚖️"
    },
    {
      name: "박민수",
      title: "파트너 변호사",
      specialty: "민사/가사법 전문",
      experience: "20년",
      education: ["고려대학교 법학과", "고려대학교 법학대학원", "사법연수원 35기"],
      career: ["前 서울가정법원 조정위원", "가사법학회 이사", "법률구조공단 자문변호사"],
      image: "👨‍⚖️"
    },
    {
      name: "최지영",
      title: "파트너 변호사",
      specialty: "국제거래/M&A 전문",
      experience: "18년",
      education: ["이화여자대학교 법학과", "서울대학교 법학대학원", "미국 뉴욕대 LL.M"],
      career: ["前 법무법인 광장 변호사", "뉴욕주 변호사", "국제변호사협회 회원"],
      image: "👩‍⚖️"
    },
    {
      name: "정태우",
      title: "전문 변호사",
      specialty: "노동법 전문",
      experience: "15년",
      education: ["성균관대학교 법학과", "성균관대학교 법학대학원", "사법연수원 40기"],
      career: ["前 고용노동부 자문변호사", "노동법학회 정회원", "중앙노동위원회 공익위원"],
      image: "👨‍⚖️"
    },
    {
      name: "한서연",
      title: "전문 변호사",
      specialty: "지적재산권 전문",
      experience: "12년",
      education: ["KAIST 전산학과", "충남대학교 법학전문대학원", "변리사 자격"],
      career: ["前 특허청 심사관", "지식재산권법학회 회원", "변리사 자격 보유"],
      image: "👩‍⚖️"
    }
  ];

  return (
    <section id="attorneys" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">전문 변호사진</h2>
          <p className="text-xl text-gray-600">
            각 분야 최고의 전문성과 풍부한 경험을 갖춘 변호사들이 함께합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{attorney.image}</div>
                <h3 className="text-2xl font-bold text-slate-900">{attorney.name}</h3>
                <p className="text-yellow-600 font-semibold">{attorney.title}</p>
                <p className="text-gray-600">{attorney.specialty}</p>
                <p className="text-sm text-gray-500 mt-2">경력 {attorney.experience}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">학력</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {attorney.education.map((edu, idx) => (
                      <li key={idx}>• {edu}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">주요 경력</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {attorney.career.map((career, idx) => (
                      <li key={idx}>• {career}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="mt-6 w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                상담 예약하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}