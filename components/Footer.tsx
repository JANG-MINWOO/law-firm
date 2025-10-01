export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">법무법인</h3>
            <p className="text-gray-400">
              전문적이고 신뢰할 수 있는 법률 서비스를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  서비스
                </a>
              </li>
              <li>
                <a href="#attorneys" className="text-gray-400 hover:text-white transition">
                  변호사 소개
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li>서울특별시 강남구</li>
              <li>전화: 02-1234-5678</li>
              <li>이메일: info@lawfirm.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 법무법인. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
