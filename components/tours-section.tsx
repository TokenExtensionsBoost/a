"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Mountain } from "lucide-react"

const tours = [
  {
    title: "Tour 1 ngày - Khám phá cơ bản",
    duration: "1 ngày",
    price: "Từ 800.000đ",
    image: "/images/tour1.jpeg",
    highlights: ["Đồi chè Mộc Châu", "Thác Dải Yếm", "Làng văn hóa Thái", "Chợ phiên Mộc Châu"],
    description: "Lịch trình hoàn hảo cho những ai muốn khám phá nhanh những điểm đến nổi tiếng nhất của Mộc Châu.",
  },
  {
    title: "Tour 2 ngày 1 đêm - Trải nghiệm đầy đủ",
    duration: "2 ngày 1 đêm",
    price: "Từ 1.500.000đ",
    image: "/images/tour2.jpg",
    highlights: ["Tất cả điểm tour 1 ngày", "Núi Pha Luông", "Hang Dơi", "Nghỉ đêm homestay"],
    description: "Trải nghiệm sâu hơn với thiên nhiên Mộc Châu, nghỉ đêm tại homestay địa phương.",
  },
  {
    title: "Tour 3 ngày 2 đêm - Khám phá toàn diện",
    duration: "3 ngày 2 đêm",
    price: "Từ 2.200.000đ",
    image: "/images/tour 3.jpeg",
    highlights: ["Tất cả điểm tour 2 ngày", "Cao nguyên Mộc Châu", "Bản Áng", "Thác Nàng Tiên"],
    description: "Hành trình khám phá toàn diện vẻ đẹp hoang sơ và văn hóa độc đáo của vùng đất Mộc Châu.",
  },
]

export default function ToursSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lịch trình gợi ý
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Những hành trình được thiết kế đặc biệt để bạn khám phá trọn vẹn vẻ đẹp Mộc Châu
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tour.duration}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">{tour.title}</h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{tour.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Điểm nổi bật:
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Chọn lịch trình này</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <Mountain className="w-12 h-12 mx-auto mb-4 text-green-100" />
              <h3 className="text-2xl font-bold mb-4">Muốn tùy chỉnh lịch trình riêng?</h3>
              <p className="text-green-100 mb-6">
                Chúng tôi sẽ thiết kế hành trình phù hợp với sở thích và thời gian của bạn
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Liên hệ tư vấn
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
