"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Users } from "lucide-react"

export default function HeroSection() {
  const scrollToBookingForm = () => {
    const bookingForm = document.querySelector("#booking-form")
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToToursSection = () => {
    const toursSection = document.querySelector("#tours-section")
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/moc-chau-hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 drop-shadow-lg">
              Khám phá{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">
                Mộc Châu
              </span>
              <br />
              theo cách riêng của bạn
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-medium bg-gradient-to-r from-green-800/70 to-green-700/70 p-4 rounded-lg backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            Dịch vụ cho thuê xe du lịch gia đình tại Mộc Châu - An toàn, thoải mái, giá cả hợp lý
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              onClick={scrollToBookingForm}
            >
              Đặt xe ngay <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 px-8 py-4 text-lg transition-all duration-300 shadow-lg"
                onClick={scrollToToursSection}
              >
                Xem lịch trình
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">50+</h3>
              <p className="text-green-100">Điểm đến</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">1000+</h3>
              <p className="text-green-100">Khách hàng</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-green-100">Hỗ trợ</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
