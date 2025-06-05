"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Users, Car, Phone, Send, CheckCircle } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    people: "",
    carType: "",
    duration: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          people: "",
          carType: "",
          duration: "",
          message: "",
        })
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại!")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Có lỗi xảy ra, vui lòng thử lại!")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0 bg-white text-center">
              <CardContent className="p-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">Đặt xe thành công!</h3>
                <p className="text-gray-600 mb-6">
                  Cảm ơn bạn đã tin tưởng dịch vụ của chúng tôi. Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút để xác
                  nhận thông tin.
                </p>
                <div className="space-y-3">
                  <Button onClick={() => setIsSuccess(false)} className="bg-green-600 hover:bg-green-700 text-white">
                    Đặt xe khác
                  </Button>
                  <p className="text-sm text-gray-500">
                    Hoặc gọi ngay <strong>0583 543 456</strong> để được hỗ trợ nhanh hơn
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white" id="booking-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Đặt xe nhanh chóng</h2>
            <p className="text-lg text-gray-600">Chỉ cần vài thông tin đơn giản, chúng tôi sẽ liên hệ với bạn ngay</p>
          </div>

          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Form đặt xe</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-green-800 font-medium">
                      Họ và tên *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Nhập họ và tên"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-green-200 focus:border-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-green-800 font-medium">
                      Số điện thoại *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-green-500" />
                      <Input
                        id="phone"
                        placeholder="0583 543 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10 border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-green-800 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-green-800 font-medium">
                      Ngày khởi hành *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-green-500" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="pl-10 border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="people" className="text-green-800 font-medium">
                      Số người *
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-green-500" />
                      <Select onValueChange={(value) => setFormData({ ...formData, people: value })}>
                        <SelectTrigger className="pl-10 border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Chọn số người" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-4">1-4 người</SelectItem>
                          <SelectItem value="5-7">5-7 người</SelectItem>
                          <SelectItem value="8-16">8-16 người</SelectItem>
                          <SelectItem value="16+">Trên 16 người</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="carType" className="text-green-800 font-medium">
                      Loại xe *
                    </Label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 w-4 h-4 text-green-500" />
                      <Select onValueChange={(value) => setFormData({ ...formData, carType: value })}>
                        <SelectTrigger className="pl-10 border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Chọn loại xe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4-seat">Xe 4 chỗ</SelectItem>
                          <SelectItem value="7-seat">Xe 7 chỗ</SelectItem>
                          <SelectItem value="16-seat">Xe 16 chỗ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-green-800 font-medium">
                    Thời gian thuê *
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                    <SelectTrigger className="border-green-200 focus:border-green-500">
                      <SelectValue placeholder="Chọn thời gian" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-day">1 ngày</SelectItem>
                      <SelectItem value="2-day">2 ngày 1 đêm</SelectItem>
                      <SelectItem value="3-day">3 ngày 2 đêm</SelectItem>
                      <SelectItem value="custom">Tùy chỉnh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-green-800 font-medium">
                    Ghi chú thêm
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Mô tả thêm về yêu cầu của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-green-200 focus:border-green-500"
                    rows={3}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Gửi yêu cầu đặt xe
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">* Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
