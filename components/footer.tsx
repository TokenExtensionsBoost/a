import Link from "next/link"
import { Car, Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mộc Châu Trip Car</h3>
                <p className="text-green-200 text-sm">Khám phá theo cách riêng</p>
              </div>
            </div>
            <p className="text-green-200 leading-relaxed">
              Dịch vụ cho thuê xe du lịch gia đình tại Mộc Châu với phong cách phục vụ chuyên nghiệp, an toàn và tận
              tâm.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-200 hover:text-white transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-green-200 hover:text-white transition-colors">
                  Lịch trình
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-green-200 hover:text-white transition-colors">
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li className="text-green-200">Thuê xe 4 chỗ</li>
              <li className="text-green-200">Thuê xe 7 chỗ</li>
              <li className="text-green-200">Thuê xe 16 chỗ</li>
              <li className="text-green-200">Tour 1 ngày</li>
              <li className="text-green-200">Tour 2-3 ngày</li>
              <li className="text-green-200">Tùy chỉnh lịch trình</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-green-200">0583 543 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-green-200">mocchaust64@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-green-200">Trung tâm thị trấn Mộc Châu, Sơn La</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Kết nối với chúng tôi</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">© 2025 Mộc Châu Trip Car. Tất cả quyền được bảo lưu.</p>
          <p className="text-green-300 text-sm mt-2">Thiết kế bởi v0 - Phát triển với ❤️ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
