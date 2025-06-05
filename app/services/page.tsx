"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Car, Users, Clock, MapPin, Shield, Star } from "lucide-react"

const carServices = [
  {
    name: "Xe 4 chỗ",
    image: "/images/xe4cho.jpeg",
    pricePerDay: "1.000.000đ - 1.200.000đ",
    pricePerHour: "120.000đ",
    description: "Xe đời mới 2024, phù hợp cho gia đình nhỏ, cặp đôi hoặc nhóm bạn 2-4 người",
    features: [
      "Xe đời mới 2024",
      "Tiết kiệm nhiên liệu",
      "Dễ dàng di chuyển",
      "Phù hợp đường núi",
      "Tài xế kinh nghiệm",
    ],
    popular: false,
  },
  {
    name: "Xe 5 chỗ",
    image: "/images/xe5cho.jpeg",
    pricePerDay: "1.200.000đ - 1.300.000đ",
    pricePerHour: "150.000đ",
    description: "VF8 đời mới, lựa chọn tuyệt vời cho gia đình hoặc nhóm bạn 4-5 người",
    features: [
      "VF8 đời mới",
      "Khả năng off-road tốt",
      "Phù hợp đường đồi núi",
      "Hành lý nhiều",
      "Tài xế kinh nghiệm",
    ],
    popular: false,
  },
  {
    name: "Xe 7 chỗ",
    image: "/images/xe7cho.jpeg",
    pricePerDay: "1.200.000đ - 1.500.000đ",
    pricePerHour: "180.000đ",
    description: "Xe đời mới, lựa chọn hoàn hảo cho gia đình đông người hoặc nhóm bạn 5-7 người",
    features: ["Xe đời mới", "Rộng rãi thoải mái", "Hành lý nhiều", "Ghế ngồi êm ái", "Điều hòa mạnh mẽ"],
    popular: true,
  },
  {
    name: "Xe 9 chỗ",
    image: "/images/xe9cho.jpeg",
    pricePerDay: "1.500.000đ - 1.800.000đ",
    pricePerHour: "200.000đ",
    description: "Xe đời mới, lý tưởng cho nhóm lớn hoặc gia đình đông thành viên",
    features: ["Xe đời mới", "Không gian rộng rãi", "Thích hợp chuyến dài", "Tài xế kinh nghiệm", "Máy lạnh mạnh"],
    popular: false,
  },
  {
    name: "Xe 16 chỗ",
    image: "/images/xe16cho.jpg",
    pricePerDay: "Từ 2.000.000đ",
    pricePerHour: "250.000đ",
    description: "Dành cho nhóm lớn, công ty, tổ chức du lịch đông người",
    features: ["Sức chứa lớn", "Tiết kiệm chi phí", "Phù hợp tour dài", "Tài xế chuyên nghiệp", "Bảo hiểm đầy đủ"],
    popular: false,
  },
]

const additionalServices = [
  {
    icon: MapPin,
    title: "Đón tại Hà Nội",
    description: "Dịch vụ đón khách tại Hà Nội và đưa về Mộc Châu",
    price: "Từ 2.000.000đ",
    features: ["Đón tại sân bay", "Đón tại khách sạn", "Đón tại nhà riêng"],
  },
  {
    icon: Users,
    title: "Hướng dẫn viên",
    description: "Hướng dẫn viên địa phương am hiểu văn hóa và lịch sử",
    price: "500.000đ/ngày",
    features: ["Thông thạo tiếng Việt", "Kiến thức sâu rộng", "Nhiệt tình thân thiện"],
  },
  {
    icon: Car,
    title: "Xe ghép",
    description: "Dịch vụ xe ghép cho khách lẻ, tiết kiệm chi phí",
    price: "200.000đ/người",
    features: ["Lịch trình cố định", "Giá cả hợp lý", "Gặp gỡ bạn mới"],
  },
]

const packages = [
  {
    name: "Gói Cơ Bản",
    price: "1.000.000đ - 1.200.000đ",
    duration: "1 ngày",
    description: "Phù hợp cho chuyến đi ngắn ngày",
    features: ["Xe 4 chỗ đời mới 2024", "Tài xế kinh nghiệm", "Nhiên liệu đầy đủ", "Bảo hiểm cơ bản", "Hỗ trợ 24/7"],
    popular: false,
  },
  {
    name: "Gói Tiêu Chuẩn",
    price: "1.200.000đ - 1.500.000đ",
    duration: "2 ngày 1 đêm",
    description: "Lựa chọn phổ biến nhất",
    features: [
      "Xe 7 chỗ đời mới",
      "Tài xế địa phương",
      "Tư vấn lịch trình",
      "Bảo hiểm toàn diện",
      "Nước uống miễn phí",
      "Hỗ trợ đặt phòng",
    ],
    popular: true,
  },
  {
    name: "Gói VIP",
    price: "Từ 2.500.000đ",
    duration: "3 ngày 2 đêm",
    description: "Trải nghiệm cao cấp nhất",
    features: [
      "Xe VF8 hoặc 7 chỗ hạng sang",
      "Tài xế - HDV chuyên nghiệp",
      "Lịch trình tùy chỉnh",
      "Bảo hiểm cao cấp",
      "Đồ ăn nhẹ miễn phí",
      "Chụp ảnh miễn phí",
      "Quà lưu niệm",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dịch vụ của chúng tôi</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Đa dạng lựa chọn xe và dịch vụ để đáp ứng mọi nhu cầu du lịch của bạn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Car Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Các loại xe cho thuê</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Đội xe đa dạng, đời mới, được bảo dưỡng định kỳ</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {carServices.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${car.popular ? "ring-2 ring-orange-500" : ""}`}
                >
                  {car.popular && (
                    <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">Phổ biến nhất</div>
                  )}
                  <div className="aspect-video overflow-hidden">
                    <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-4">{car.description}</p>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold text-orange-500">{car.pricePerDay}/ngày</span>
                        <span className="text-sm text-gray-500">{car.pricePerHour}/giờ</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-green-700 mb-3">Tính năng nổi bật:</h4>
                      <ul className="space-y-2">
                        {car.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Đặt xe ngay</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Dịch vụ bổ sung</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những dịch vụ thêm để chuyến đi của bạn trở nên hoàn hảo hơn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-orange-500 mb-4">{service.price}</div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Gói dịch vụ trọn gói</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Các gói dịch vụ được thiết kế sẵn với giá ưu đãi</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${pkg.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
                >
                  {pkg.popular && (
                    <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-1" />
                      Được chọn nhiều nhất
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-orange-500 mb-2">{pkg.price}</div>
                    <div className="text-gray-500 mb-4">{pkg.duration}</div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>

                    <ul className="space-y-3 mb-8 text-left">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${pkg.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-green-600 hover:bg-green-700"} text-white`}
                    >
                      Chọn gói này
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tại sao chọn dịch vụ của chúng tôi?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "An toàn đảm bảo", desc: "Xe được kiểm tra định kỳ" },
              { icon: Clock, title: "Đúng giờ", desc: "Luôn đón đúng thời gian hẹn" },
              { icon: Star, title: "Chất lượng cao", desc: "Dịch vụ 5 sao từ khách hàng" },
              { icon: Users, title: "Tài xế chuyên nghiệp", desc: "Kinh nghiệm và thân thiện" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-green-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
