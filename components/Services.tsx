export default function Services() {
  const services = [
    {
      title: "형사 변호",
      icon: "⚖️",
      description: "무죄 추정의 원칙을 바탕으로 의뢰인의 권리를 보호합니다",
      features: ["구속 전 피의자 변호", "재판 변호", "형사 고소/고발", "보석 신청"]
    },
    {
      title: "민사 소송",
      icon: "📋",
      description: "복잡한 민사 분쟁을 명쾌하게 해결합니다",
      features: ["손해배상", "계약 분쟁", "부동산 소송", "건설 분쟁"]
    },
    {
      title: "가사 소송",
      icon: "👨‍👩‍👧‍👦",
      description: "가족의 행복을 최우선으로 생각합니다",
      features: ["이혼 소송", "상속 분쟁", "양육권 소송", "재산 분할"]
    },
    {
      title: "기업 법무",
      icon: "🏢",
      description: "기업의 성장을 법적으로 뒷받침합니다",
      features: ["계약서 검토", "M&A 자문", "노동 분쟁", "지적재산권"]
    },
    {
      title: "행정 소송",
      icon: "🏛️",
      description: "국가 권력으로부터 시민의 권리를 지킵니다",
      features: ["행정처분 취소", "국가배상", "정보공개 청구", "행정심판"]
    },
    {
      title: "국제 소송",
      icon: "🌍",
      description: "글로벌 시대의 국경 없는 법률 서비스",
      features: ["국제거래 분쟁", "해외투자 보호", "국제중재", "외국판결 집행"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">전문 업무분야</h2>
          <p className="text-xl text-gray-600">
            각 분야 최고의 전문가들이 여러분과 함께합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition">
                자세히 보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}