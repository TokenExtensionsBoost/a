"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ThumbsUp, Camera, MapPin } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Anh Minh Tuấn",
    location: "Hà Nội",
    rating: 5,
    date: "15/2/2025",
    tour: "Tour 2 ngày 1 đêm",
    comment:
      "Dịch vụ tuyệt vời! Tài xế anh Dũng rất nhiệt tình, xe sạch sẽ. Gia đình tôi đã có chuyến đi Mộc Châu rất đáng nhớ. Đặc biệt ấn tượng với cảnh đồi chè buổi sáng sớm, thực sự như tranh vẽ. Sẽ quay lại lần sau!",
    image: "/images/review-avatar-1.jpg",
    photos: ["/images/review-1.jpg", "/images/review-2.jpg"],
    helpful: 24,
  },
  {
    id: 2,
    name: "Chị Lan Anh",
    location: "TP.HCM",
    rating: 5,
    date: "08/4/2025",
    tour: "Tour 3 ngày 2 đêm",
    comment:
      "Lần đầu đi Mộc Châu, được anh tài xế hướng dẫn rất tận tình. Giá cả hợp lý, xe đời mới. Homestay rất sạch sẽ, chủ nhà thân thiện. Cảm ơn team Mộc Châu Trip Car đã tạo nên chuyến đi hoàn hảo!",
    image: "/images/review-avatar-2.jpg",
    photos: ["/images/review-3.jpg"],
    helpful: 18,
  },
  {
    id: 3,
    name: "Anh Hoàng Nam",
    location: "Đà Nẵng",
    rating: 5,
    date: "02/3/2025",
    tour: "Xe 16 chỗ - 1 ngày",
    comment:
      "Đặt xe 16 chỗ cho công ty đi team building. Mọi thứ đều hoàn hảo từ A-Z. Đúng giờ, an toàn, tài xế vui vẻ. Xe rộng rãi, máy lạnh mát. Highly recommended cho các công ty muốn tổ chức tour!",
    image: "/images/review-avatar-3.jpg",
    photos: [
      "/images/review-4.jpg",
      "/images/review-5.jpg",
      "/images/review-6.jpg",
    ],
    helpful: 31,
  },
  {
    id: 4,
    name: "Chị Thu Hà",
    location: "Hải Phòng",
    rating: 5,
    date: "25/04/2025",
    tour: "Tour 2 ngày 1 đêm",
    comment:
      "Chuyến đi gia đình 6 người, thuê xe 7 chỗ rất thoải mái. Lịch trình linh hoạt, muốn dừng đâu cũng được. Giá cả minh bạch, không phát sinh. Tài xế anh Tuấn rất am hiểu địa phương, giới thiệu nhiều địa điểm đẹp.",
    image: "/images/review-avatar-4.jpg",
    photos: ["/images/review-7.jpg"],
    helpful: 15,
  },
  {
    id: 5,
    name: "Anh Đức Anh",
    location: "Hà Nội",
    rating: 5,
    date: "18/04/2025",
    tour: "Tour 1 ngày",
    comment:
      "Lần thứ 3 sử dụng dịch vụ. Luôn hài lòng với chất lượng phục vụ. Đặc biệt cảm ơn anh Tuấn đã chụp ảnh gia đình rất đẹp! Xe luôn sạch sẽ, tài xế đúng giờ và nhiệt tình.",
    image: "/images/review-avatar-5.jpg",
    photos: ["/images/review-8.jpg", "/images/review-9.jpg"],
    helpful: 22,
  },
  {
    id: 6,
    name: "Chị Mai Linh",
    location: "Vĩnh Phúc",
    rating: 5,
    date: "12/04/2025",
    tour: "Tour 2 ngày 1 đêm",
    comment:
      "Đi với nhóm bạn thân, thuê xe 7 chỗ. Tài xế rất am hiểu địa phương, giới thiệu nhiều địa điểm đẹp mà chúng tôi không biết. Chuyến đi quá tuyệt vời! Đã giới thiệu cho nhiều bạn bè.",
    image: "/images/review-avatar-6.jpg",
    photos: ["/images/review-10.jpg"],
    helpful: 19,
  },
]

const stats = [
  { number: "1000+", label: "Khách hàng đã phục vụ", icon: "👥" },
  { number: "5/5", label: "Đánh giá trung bình", icon: "⭐" },
  { number: "98%", label: "Khách hàng hài lòng", icon: "😊" },
  { number: "24/7", label: "Hỗ trợ không ngừng", icon: "📞" },
]

const tourTypes = [
  { name: "Tour 1 ngày", count: 156, rating: 4.8 },
  { name: "Tour 2 ngày 1 đêm", count: 203, rating: 4.9 },
  { name: "Tour 3 ngày 2 đêm", count: 89, rating: 5.0 },
  { name: "Xe 4 chỗ", count: 312, rating: 4.8 },
  { name: "Xe 7 chỗ", count: 445, rating: 4.9 },
  { name: "Xe 16 chỗ", count: 178, rating: 4.9 },
]

export default function ReviewsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Đánh giá từ khách hàng</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Hơn 1000+ khách hàng đã tin tưởng và có những trải nghiệm tuyệt vời cùng chúng tôi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tour Ratings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Đánh giá theo dịch vụ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Xem đánh giá chi tiết cho từng loại dịch vụ</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourTypes.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">{tour.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(tour.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="ml-2 font-semibold text-orange-500">{tour.rating}</span>
                    </div>
                    <p className="text-gray-600">{tour.count} đánh giá</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Chia sẻ từ khách hàng</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những trải nghiệm thật từ khách hàng đã sử dụng dịch vụ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-green-800">{review.name}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {review.location} • {review.date}
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600">({review.rating}/5)</span>
                    </div>

                    {/* Tour Type */}
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {review.tour}
                      </span>
                    </div>

                    {/* Comment */}
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-green-200" />
                      <p className="text-gray-700 leading-relaxed pl-4">{review.comment}</p>
                    </div>

                    {/* Photos */}
                    {review.photos && review.photos.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Camera className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-600">Ảnh từ chuyến đi ({review.photos.length})</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {review.photos.slice(0, 3).map((photo, idx) => (
                            <img
                              key={idx}
                              src={photo || "/placeholder.svg"}
                              alt={`Ảnh ${idx + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Helpful */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {review.helpful} người thấy hữu ích
                      </div>
                      <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                        Hữu ích
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Experience CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <Quote className="w-12 h-12 mx-auto mb-4 text-orange-100" />
                <h3 className="text-2xl font-bold mb-4">Bạn đã từng sử dụng dịch vụ của chúng tôi?</h3>
                <p className="text-orange-100 mb-6">
                  Hãy chia sẻ trải nghiệm của bạn để giúp những khách hàng khác có lựa chọn tốt nhất
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                    Viết đánh giá
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                    Gửi ảnh chuyến đi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
