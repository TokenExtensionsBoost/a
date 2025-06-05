import HeroSection from "@/components/hero-section"
import BookingForm from "@/components/booking-form"
import ServicesSection from "@/components/services-section"
import ToursSection from "@/components/tours-section"
import ReviewsSection from "@/components/reviews-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
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
