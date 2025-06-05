"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Heart, Car, MapPin } from "lucide-react"

const teamMembers = [
  {
    name: "Anh An",
    role: "Giám đốc điều hành",
    experience: "10 năm kinh nghiệm",
    image: "/images/anhan.jpg",
    description: "Người sáng lập với tình yêu du lịch và mong muốn mang đến trải nghiệm tuyệt vời cho khách hàng",
  },
  {
    name: "Anh Tuấn",
    role: "Tài xế trưởng",
    experience: "8 năm lái xe",
    image: "/images/anhan.jpg",
    description: "Am hiểu mọi ngõ ngách Mộc Châu, luôn đảm bảo an toàn và thoải mái cho khách",
  },
  {
    name: "Chị Thuỷ",
    role: "Chăm sóc khách hàng",
    experience: "5 năm kinh nghiệm",
    image: "/images/chi thuy.jpg",
    description: "Tư vấn nhiệt tình, hỗ trợ khách hàng 24/7 với thái độ thân thiện và chuyên nghiệp",
  },
]

const values = [
  {
    icon: Shield,
    title: "An toàn là ưu tiên hàng đầu",
    description: "Tất cả xe được kiểm tra định kỳ, tài xế có bằng lái chuyên nghiệp và kinh nghiệm lâu năm",
  },
  {
    icon: Heart,
    title: "Phục vụ từ trái tim",
    description: "Chúng tôi không chỉ cung cấp dịch vụ mà còn chia sẻ tình yêu với vùng đất Mộc Châu",
  },
  {
    icon: Users,
    title: "Khách hàng là trung tâm",
    description: "Mọi quyết định đều hướng đến việc mang lại trải nghiệm tốt nhất cho khách hàng",
  },
  {
    icon: Award,
    title: "Chất lượng đảm bảo",
    description: "Cam kết chất lượng dịch vụ cao với giá cả hợp lý và minh bạch",
  },
]

const stats = [
  { number: "1000+", label: "Khách hàng hài lòng" },
  { number: "50+", label: "Điểm đến khám phá" },
  { number: "5", label: "Năm kinh nghiệm" },
  { number: "24/7", label: "Hỗ trợ không ngừng" },
]

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Mộc Châu Trip Car</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Chúng tôi là đơn vị tiên phong trong lĩnh vực cho thuê xe du lịch tại Mộc Châu, với sứ mệnh mang đến những
              chuyến đi an toàn, thoải mái và đáng nhớ cho mọi gia đình.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mộc Châu Trip Car được thành lập từ tình yêu với vùng đất Mộc Châu xinh đẹp. Chúng tôi hiểu rằng mỗi
                  chuyến đi không chỉ là di chuyển từ điểm A đến điểm B, mà là cả một hành trình khám phá và tạo nên
                  những kỷ niệm đẹp.
                </p>
                <p>
                  Với đội ngũ tài xế bản địa am hiểu từng con đường, từng cảnh đẹp, chúng tôi không chỉ đưa bạn đến đích
                  mà còn chia sẻ những câu chuyện, những bí mật thú vị về vùng đất này.
                </p>
                <p>
                  Sau 5 năm hoạt động, chúng tôi tự hào đã phục vụ hơn 1000 gia đình và nhận được sự tin tưởng tuyệt đối
                  từ khách hàng.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/moc-chau-hero.png"
                alt="Mộc Châu Trip Car Story"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Năm kinh nghiệm</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Giá trị cốt lõi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những con người tận tâm, nhiệt huyết đứng sau mỗi chuyến đi thành công
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
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
                <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Sứ mệnh của chúng tôi</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                "Mang đến cho mỗi gia đình những chuyến đi an toàn, thoải mái và đáng nhớ, đồng thời quảng bá vẻ đẹp
                thiên nhiên và văn hóa độc đáo của Mộc Châu đến với du khách trong và ngoài nước."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">An toàn</h3>
                  <p className="text-gray-600">Đảm bảo an toàn tuyệt đối cho mọi chuyến đi</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Tận tâm</h3>
                  <p className="text-gray-600">Phục vụ với tất cả tình yêu và sự tận tâm</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Khám phá</h3>
                  <p className="text-gray-600">Mở ra những trải nghiệm khám phá tuyệt vời</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
