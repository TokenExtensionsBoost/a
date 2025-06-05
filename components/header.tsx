"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/tours", label: "Lịch trình" },
    { href: "/reviews", label: "Đánh giá" },
    { href: "/contact", label: "Liên hệ" },
  ]

  const handleBookNow = () => {
    // Nếu đang ở trang chủ, scroll đến form đặt xe
    if (window.location.pathname === "/") {
      const bookingForm = document.querySelector("#booking-form")
      if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Nếu không ở trang chủ, chuyển đến trang chủ và thêm hash để scroll đến form
      router.push("/?scroll=booking")
    }
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">Mộc Châu Trip Car</h1>
              <p className="text-xs text-green-600">Khám phá theo cách riêng</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={handleBookNow}>Đặt xe ngay</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4" onClick={handleBookNow}>Đặt xe ngay</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
