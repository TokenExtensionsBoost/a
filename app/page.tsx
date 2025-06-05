"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import BookingForm from "@/components/booking-form"
import ServicesSection from "@/components/services-section"
import ToursSection from "@/components/tours-section"
import ReviewsSection from "@/components/reviews-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  useEffect(() => {
    // Kiểm tra xem có parameter scroll=booking trong URL không
    const urlParams = new URLSearchParams(window.location.search)
    const scrollParam = urlParams.get("scroll")
    
    if (scrollParam === "booking") {
      setTimeout(() => {
        const bookingForm = document.querySelector("#booking-form")
        if (bookingForm) {
          bookingForm.scrollIntoView({ behavior: "smooth" })
        }
      }, 100) // Đợi một chút để các component render xong
    }
  }, [])

  return (
    <main className="min-h-screen">
      <HeroSection />
      <BookingForm />
      <ServicesSection />
      <ToursSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  )
}
