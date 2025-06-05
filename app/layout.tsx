import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mộc Châu Trip Car - Khám phá Mộc Châu theo cách riêng của bạn",
  description:
    "Dịch vụ cho thuê xe du lịch gia đình tại Mộc Châu - An toàn, thoải mái, giá cả hợp lý. Đặt xe ngay để có chuyến đi hoàn hảo!",
  keywords: "thuê xe Mộc Châu, du lịch Mộc Châu, xe gia đình, tour Mộc Châu",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
