"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Anh Minh Tuấn",
    location: "Hà Nội",
    rating: 5,
    date: "15/04/2025",
    comment:
      "Dịch vụ tuyệt vời! Tài xế anh Dũng rất nhiệt tình, xe sạch sẽ. Gia đình tôi đã có chuyến đi Mộc Châu rất đáng nhớ. Sẽ quay lại lần sau!",
    image: "https://i.pravatar.cc/150?img=1",
    tour: "Tour 2 ngày 1 đêm",
  },
  {
    name: "Chị Lan Anh",
    location: "TP.HCM",
    rating: 5,
    date: "08/05/2025",
    comment:
      "Lần đầu đi Mộc Châu, được anh tài xế hướng dẫn rất tận tình. Giá cả hợp lý, xe đời mới. Cảm ơn team Mộc Châu Trip Car!",
    image: "https://i.pravatar.cc/150?img=5",
    tour: "Tour 3 ngày 2 đêm",
  },
  {
    name: "Anh Hoàng Nam",
    location: "Đà Nẵng",
    rating: 5,
    date: "02/01/2025",
    comment:
      "Đặt xe 16 chỗ cho công ty đi team building. Mọi thứ đều hoàn hảo từ A-Z. Đúng giờ, an toàn, tài xế vui vẻ. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=3",
    tour: "Xe 16 chỗ - 1 ngày",
  },
  {
    name: "Chị Thu Hà",
    location: "Hải Phòng",
    rating: 5,
    date: "25/04/2025",
    comment:
      "Chuyến đi gia đình 6 người, thuê xe 7 chỗ rất thoải mái. Lịch trình linh hoạt, muốn dừng đâu cũng được. Giá cả minh bạch, không phát sinh.",
    image: "https://i.pravatar.cc/150?img=9",
    tour: "Tour 2 ngày 1 đêm",
  },
  {
    name: "Anh Đức Anh",
    location: "Hà Nội",
    rating: 5,
    date: "18/04/2025",
    comment:
      "Lần thứ 3 sử dụng dịch vụ. Luôn hài lòng với chất lượng phục vụ. Đặc biệt cảm ơn anh Tuấn đã chụp ảnh gia đình rất đẹp!",
    image: "https://i.pravatar.cc/150?img=12",
    tour: "Tour 1 ngày",
  },
  {
    name: "Chị Mai Linh",
    location: "Vĩnh Phúc",
    rating: 5,
    date: "12/04/2025",
    comment:
      "Đi với nhóm bạn thân, thuê xe 7 chỗ. Tài xế rất am hiểu địa phương, giới thiệu nhiều địa điểm đẹp. Chuyến đi quá tuyệt vời!",
    image: "https://i.pravatar.cc/150?img=20",
    tour: "Tour 2 ngày 1 đêm",
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Khách hàng nói gì về chúng tôi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hơn 1000+ khách hàng đã tin tưởng và có những trải nghiệm tuyệt vời cùng chúng tôi
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Khách hàng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4/5</div>
            <div className="text-gray-600">Đánh giá</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Hỗ trợ</div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-green-400 shadow-lg hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-800">{review.name}</h4>
                      <p className="text-sm text-gray-500">
                        {review.location} • {review.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {review.tour}
                    </span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-green-200" />
                    <p className="text-gray-700 leading-relaxed pl-4">{review.comment}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Bạn đã sẵn sàng cho chuyến đi?</h3>
              <p className="text-orange-100 mb-6">Hãy để chúng tôi tạo nên những kỷ niệm đẹp cho bạn và gia đình</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Đặt xe ngay
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Xem thêm đánh giá
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
