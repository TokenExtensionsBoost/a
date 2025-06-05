"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Zap } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Hotline/Zalo",
    content: "0583 543 456",
    description: "Hỗ trợ 24/7 - Gọi ngay để được tư vấn",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    content: "mocchaust64@gmail.com",
    description: "Phản hồi trong vòng 1 giờ",
    color: "bg-orange-500",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "Trung tâm thị trấn Mộc Châu, Sơn La",
    description: "Gần chợ Mộc Châu, dễ tìm",
    color: "bg-blue-500",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "24/7 - Cả tuần",
    description: "Luôn sẵn sàng phục vụ bạn",
    color: "bg-purple-500",
  },
]

const faqs = [
  {
    question: "Làm thế nào để đặt xe?",
    answer:
      "Bạn có thể đặt xe qua form trên website, gọi điện thoại hoặc nhắn tin Zalo. Chúng tôi sẽ xác nhận và liên hệ lại trong 15 phút.",
  },
  {
    question: "Giá cả có bao gồm nhiên liệu không?",
    answer: "Có, tất cả giá niêm yết đã bao gồm nhiên liệu, tài xế và bảo hiểm cơ bản. Không có phí phát sinh ẩn.",
  },
  {
    question: "Có thể hủy đặt xe không?",
    answer: "Có thể hủy miễn phí trước 24h. Hủy trong vòng 24h sẽ tính phí 50% giá trị đặt cọc.",
  },
  {
    question: "Xe có được bảo dưỡng định kỳ không?",
    answer:
      "Tất cả xe được kiểm tra và bảo dưỡng định kỳ hàng tháng. Chúng tôi cam kết xe luôn trong tình trạng tốt nhất.",
  },
]

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Sẵn sàng hỗ trợ bạn 24/7 để tạo nên chuyến đi hoàn hảo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">{info.title}</h3>
                    <p className="text-xl font-bold text-gray-800 mb-2">{info.content}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Gửi tin nhắn cho chúng tôi</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-green-800 mb-2">Họ và tên *</label>
                        <Input placeholder="Nhập họ và tên" className="border-green-200 focus:border-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-green-800 mb-2">Số điện thoại *</label>
                        <Input placeholder="Nhập số điện thoại" className="border-green-200 focus:border-green-500" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-800 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-800 mb-2">Dịch vụ quan tâm</label>
                      <select className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none">
                        <option>Chọn dịch vụ</option>
                        <option>Thuê xe 4 chỗ</option>
                        <option>Thuê xe 7 chỗ</option>
                        <option>Thuê xe 9 chỗ</option>
                        <option>Tour 1 ngày</option>
                        <option>Tour 2 ngày 1 đêm</option>
                        <option>Tour 3 ngày 2 đêm</option>
                        <option>Tùy chỉnh lịch trình</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-800 mb-2">Tin nhắn *</label>
                      <Textarea
                        placeholder="Mô tả chi tiết nhu cầu của bạn..."
                        rows={4}
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Gửi tin nhắn
                    </Button>

                    <p className="text-sm text-gray-500 text-center">* Chúng tôi sẽ phản hồi trong vòng 15 phút</p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-4">Liên hệ nhanh</h4>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                      onClick={() => window.open("tel:0583543456")}
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      Gọi ngay: 0583 543 456
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 justify-start"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Chat Zalo
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 justify-start"
                    >
                      <Facebook className="w-5 h-5 mr-3" />
                      Facebook Messenger
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Zap className="w-6 h-6 text-red-500 mr-2" />
                    <h4 className="text-lg font-semibold text-red-800">Hỗ trợ khẩn cấp</h4>
                  </div>
                  <p className="text-red-700 mb-4">Nếu bạn đang trong chuyến đi và cần hỗ trợ khẩn cấp:</p>
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => window.open("tel:0583543456")}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Gọi hotline 24/7
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Giờ làm việc</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Thứ 2 - Chủ nhật:</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hotline:</span>
                      <span className="font-medium text-green-600">Luôn sẵn sàng</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium">Phản hồi trong vòng 1 giờ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Những câu hỏi phổ biến từ khách hàng</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Vị trí của chúng tôi</h2>
            <p className="text-lg text-gray-600">Trung tâm thị trấn Mộc Châu, Sơn La</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14829.099193922915!2d104.64663667706945!3d20.829302041126744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31346eb73f08726d%3A0x4eff8799ed5a7c2a!2zVGjhu4sgdHLhuqVuIE3hu5ljIENow6J1LCBNw7ljIENow6J1LCBTxqFuIExhLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1715724864346!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vị trí Mộc Châu Trip Car"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://maps.google.com/?q=Thị+trấn+Mộc+Châu,+Mộc+Châu,+Sơn+La,+Việt+Nam", "_blank")}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Xem trên Google Maps
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
