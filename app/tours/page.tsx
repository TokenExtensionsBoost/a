"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star, Camera, Mountain, Coffee } from "lucide-react"

const tours = [
  {
    id: 1,
    title: "Tour 1 ngày - Khám phá cơ bản",
    duration: "1 ngày (8:00 - 18:00)",
    price: "Từ 800.000đ",
    image: "/images/tour1.jpeg",
    rating: 5,
    reviews: 156,
    groupSize: "2-16 người",
    highlights: ["Đồi chè Mộc Châu", "Thác Dải Yếm", "Làng văn hóa Thái", "Chợ phiên Mộc Châu"],
    description:
      "Lịch trình hoàn hảo cho những ai muốn khám phá nhanh những điểm đến nổi tiếng nhất của Mộc Châu trong một ngày.",
    schedule: [
      { time: "08:00", activity: "Khởi hành từ trung tâm thị trấn" },
      { time: "09:00", activity: "Tham quan đồi chè Mộc Châu, chụp ảnh" },
      { time: "11:00", activity: "Thác Dải Yếm - tắm và thư giãn" },
      { time: "13:00", activity: "Ăn trưa tại nhà hàng địa phương" },
      { time: "14:30", activity: "Làng văn hóa Thái - tìm hiểu văn hóa" },
      { time: "16:00", activity: "Chợ phiên Mộc Châu - mua sắm đặc sản" },
      { time: "18:00", activity: "Kết thúc tour, trở về" },
    ],
    included: ["Xe đời mới có máy lạnh", "Tài xế kinh nghiệm", "Nước uống", "Bảo hiểm du lịch"],
    notIncluded: ["Ăn uống", "Vé tham quan", "Chi phí cá nhân"],
  },
  {
    id: 2,
    title: "Tour 2 ngày 1 đêm - Trải nghiệm đầy đủ",
    duration: "2 ngày 1 đêm",
    price: "Từ 1.500.000đ",
    image: "/images/tour2.jpg",
    rating: 4,
    reviews: 203,
    groupSize: "2-16 người",
    highlights: ["Tất cả điểm tour 1 ngày", "Núi Pha Luông", "Hang Dơi", "Nghỉ đêm homestay"],
    description:
      "Trải nghiệm sâu hơn với thiên nhiên Mộc Châu, nghỉ đêm tại homestay địa phương để cảm nhận cuộc sống bản địa.",
    schedule: [
      { time: "Ngày 1 - 08:00", activity: "Khởi hành, tham quan đồi chè" },
      { time: "10:00", activity: "Thác Dải Yếm" },
      { time: "13:00", activity: "Ăn trưa, nghỉ ngơi" },
      { time: "15:00", activity: "Núi Pha Luông - ngắm cảnh" },
      { time: "18:00", activity: "Check-in homestay, ăn tối" },
      { time: "Ngày 2 - 08:00", activity: "Ăn sáng, khám phá Hang Dơi" },
      { time: "11:00", activity: "Làng văn hóa Thái" },
      { time: "13:00", activity: "Ăn trưa, mua sắm đặc sản" },
      { time: "15:00", activity: "Kết thúc tour, trở về" },
    ],
    included: [
      "Xe đời mới có máy lạnh",
      "Tài xế kinh nghiệm",
      "1 đêm homestay",
      "Ăn sáng ngày 2",
      "Nước uống",
      "Bảo hiểm du lịch",
    ],
    notIncluded: ["Ăn trưa, ăn tối", "Vé tham quan", "Chi phí cá nhân"],
  },
  {
    id: 3,
    title: "Tour 3 ngày 2 đêm - Khám phá toàn diện",
    duration: "3 ngày 2 đêm",
    price: "Từ 2.200.000đ",
    image: "/images/tour 3.jpeg",
    rating: 5.0,
    reviews: 89,
    groupSize: "2-16 người",
    highlights: ["Tất cả điểm tour 2 ngày", "Cao nguyên Mộc Châu", "Bản Áng", "Thác Nàng Tiên"],
    description: "Hành trình khám phá toàn diện vẻ đẹp hoang sơ và văn hóa độc đáo của vùng đất Mộc Châu trong 3 ngày.",
    schedule: [
      { time: "Ngày 1", activity: "Đồi chè, Thác Dải Yếm, Núi Pha Luông" },
      { time: "Ngày 2", activity: "Hang Dơi, Cao nguyên Mộc Châu, Bản Áng" },
      { time: "Ngày 3", activity: "Thác Nàng Tiên, Làng văn hóa, mua sắm" },
    ],
    included: [
      "Xe đời mới có máy lạnh",
      "Tài xế - HDV",
      "2 đêm homestay",
      "Ăn sáng 2 ngày",
      "Nước uống",
      "Bảo hiểm du lịch",
      "Quà lưu niệm",
    ],
    notIncluded: ["Ăn trưa, ăn tối", "Vé tham quan", "Chi phí cá nhân"],
  },
]

const destinations = [
  {
    name: "Đồi chè Mộc Châu",
    image: "/images/doiche.jpg",
    description: "Những thảm chè xanh mướt trải dài bất tận",
    bestTime: "Sáng sớm (6:00-8:00)",
  },
  {
    name: "Thác Dải Yếm",
    image: "/images/thacdaiyem.jpg",
    description: "Thác nước hùng vĩ giữa núi rừng Tây Bắc",
    bestTime: "Cả ngày",
  },
  {
    name: "Núi Pha Luông",
    image: "/images/dinh-pha-luong.webp",
    description: "Đỉnh núi cao nhất khu vực với view 360°",
    bestTime: "Chiều tà (16:00-18:00)",
  },
  {
    name: "Làng văn hóa Thái",
    image: "/images/langvanhoathai.jpg",
    description: "Khám phá văn hóa độc đáo của người Thái",
    bestTime: "Buổi chiều",
  },
]

export default function ToursPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Lịch trình khám phá Mộc Châu</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Những hành trình được thiết kế đặc biệt để bạn khám phá trọn vẹn vẻ đẹp Mộc Châu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Các tour du lịch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lựa chọn tour phù hợp với thời gian và sở thích của bạn
            </p>
          </motion.div>

          <div className="space-y-12">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-video lg:aspect-auto">
                      <img
                        src={tour.image || "/placeholder.svg"}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {tour.price}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {tour.rating} ({tour.reviews})
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tour.groupSize}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-green-800 mb-3">{tour.title}</h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">{tour.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          Điểm nổi bật:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tour.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Schedule Preview */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-green-700 mb-3">Lịch trình tóm tắt:</h4>
                        <div className="space-y-2">
                          {tour.schedule.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex text-sm text-gray-600">
                              <span className="font-medium text-orange-500 mr-3 min-w-[60px]">{item.time}</span>
                              <span>{item.activity}</span>
                            </div>
                          ))}
                          {tour.schedule.length > 3 && (
                            <div className="text-sm text-gray-500 italic">
                              ... và {tour.schedule.length - 3} hoạt động khác
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-green-600 hover:bg-green-700 text-white flex-1">Đặt tour ngay</Button>
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          Xem chi tiết
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Điểm đến nổi bật</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Những địa điểm không thể bỏ qua khi đến Mộc Châu</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-green-800 mb-2">{destination.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
                    <div className="flex items-center text-xs text-orange-500">
                      <Clock className="w-3 h-3 mr-1" />
                      Thời gian đẹp nhất: {destination.bestTime}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-8 md:p-12 text-center">
                <Mountain className="w-16 h-16 mx-auto mb-6 text-green-100" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Muốn tùy chỉnh lịch trình riêng?</h3>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Chúng tôi sẽ thiết kế hành trình phù hợp với sở thích, thời gian và ngân sách của bạn
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                    <h4 className="font-semibold mb-1">Chụp ảnh chuyên nghiệp</h4>
                    <p className="text-sm text-green-100">Lưu giữ kỷ niệm đẹp</p>
                  </div>
                  <div className="text-center">
                    <Coffee className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                    <h4 className="font-semibold mb-1">Ẩm thực địa phương</h4>
                    <p className="text-sm text-green-100">Thưởng thức đặc sản</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                    <h4 className="font-semibold mb-1">HDV chuyên nghiệp</h4>
                    <p className="text-sm text-green-100">Kiến thức sâu rộng</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                    Liên hệ tư vấn ngay
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600"
                  >
                    Xem thêm tour
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
