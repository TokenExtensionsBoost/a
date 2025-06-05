"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, MapPin, Headphones, Star, Users } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "An toàn tuyệt đối",
    description: "Xe được bảo dưỡng định kỳ, tài xế kinh nghiệm, bảo hiểm đầy đủ",
    color: "text-green-500",
  },
  {
    icon: Clock,
    title: "Đúng giờ cam kết",
    description: "Luôn đón đúng giờ, không để bạn chờ đợi trong hành trình",
    color: "text-orange-500",
  },
  {
    icon: MapPin,
    title: "Lịch trình linh hoạt",
    description: "Tùy chỉnh lộ trình theo ý muốn, dừng chân tại bất kỳ đâu",
    color: "text-blue-500",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ hỗ trợ luôn sẵn sàng qua Zalo, điện thoại mọi lúc",
    color: "text-purple-500",
  },
  {
    icon: Star,
    title: "Giá cả minh bạch",
    description: "Báo giá rõ ràng, không phát sinh chi phí ẩn trong suốt hành trình",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Dịch vụ cá nhân hóa",
    description: "Phục vụ theo nhu cầu riêng của từng gia đình, nhóm bạn",
    color: "text-red-500",
  },
]

const carTypes = [
  {
    name: "Xe 4 chỗ",
    image: "/images/xe4cho.jpeg",
    price: "1.000.000đ - 1.200.000đ/ngày",
    features: ["Xe đời mới 2024", "Tiết kiệm nhiên liệu", "Dễ di chuyển"],
  },
  {
    name: "Xe 5 chỗ VF8",
    image: "/images/xe5cho.jpeg",
    price: "1.200.000đ - 1.300.000đ/ngày",
    features: ["VF8 đời mới", "Khả năng off-road tốt", "Phù hợp đường đồi núi"],
  },
  {
    name: "Xe 7 chỗ",
    image: "/images/xe7cho.jpeg",
    price: "1.200.000đ - 1.500.000đ/ngày",
    features: ["Xe đời mới", "Rộng rãi thoải mái", "Hành lý nhiều"],
  },
  {
    name: "Xe 9 chỗ",
    image: "/images/xe9cho.jpg",
    price: "1.500.000đ - 1.800.000đ/ngày",
    features: ["Xe đời mới", "Không gian rộng rãi", "Thích hợp chuyến dài"],
  },
  {
    name: "Xe 16 chỗ",
    image: "/images/xe16cho.jpg",
    price: "Từ 2.000.000đ/ngày",
    features: ["Nhóm bạn lớn", "Du lịch công ty", "Tiết kiệm chi phí"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Services */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tại sao chọn chúng tôi?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Chúng tôi cam kết mang đến trải nghiệm du lịch tuyệt vời nhất cho bạn và gia đình
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-green-100">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Car Types */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Đa dạng loại xe
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lựa chọn phù hợp với mọi nhu cầu của bạn
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carTypes.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{car.name}</h3>
                  <p className="text-2xl font-bold text-orange-500 mb-4">{car.price}</p>
                  <ul className="space-y-2">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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
  )
}
