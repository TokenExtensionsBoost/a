"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Liên hệ với chúng tôi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sẵn sàng hỗ trợ bạn 24/7 để tạo nên chuyến đi hoàn hảo
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Thông tin liên hệ</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Hotline/Zalo</h4>
                      <p className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors">
                        <a href="tel:0583543456">0583 543 456</a>
                      </p>
                      <p className="text-sm text-gray-500">Hỗ trợ 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Email</h4>
                      <p className="text-gray-600">mocchaust64@gmail.com</p>
                      <p className="text-sm text-gray-500">Phản hồi trong 1 giờ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Địa chỉ</h4>
                      <p className="text-gray-600">Trung tâm thị trấn Mộc Châu, Sơn La</p>
                      <p className="text-sm text-gray-500">Gần chợ Mộc Châu</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Giờ làm việc</h4>
                      <p className="text-gray-600">24/7 - Cả tuần</p>
                      <p className="text-sm text-gray-500">Luôn sẵn sàng phục vụ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="font-semibold text-green-800">Liên hệ nhanh:</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center" 
                          onClick={() => window.open("https://zalo.me/0583543456", "_blank")}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Zalo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 flex items-center justify-center"
                    onClick={() => window.open("tel:0583543456", "_self")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi ngay
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                      <option>Thuê xe 16 chỗ</option>
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
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Vị trí của chúng tôi</h3>
            <p className="text-lg text-gray-600">Trung tâm thị trấn Mộc Châu, Sơn La</p>
          </div>
        
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
  )
}
