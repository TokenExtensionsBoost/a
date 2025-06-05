import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, people, carType, duration, message } = body

    // Tạo nội dung email
    const emailContent = `
      Yêu cầu đặt xe mới từ website Mộc Châu Trip Car
      
      Thông tin khách hàng:
      - Họ tên: ${name}
      - Số điện thoại: ${phone}
      - Email: ${email || "Không cung cấp"}
      - Ngày khởi hành: ${date}
      - Số người: ${people}
      - Loại xe: ${carType}
      - Thời gian thuê: ${duration}
      - Tin nhắn: ${message || "Không có"}
      
      Vui lòng liên hệ khách hàng trong vòng 15 phút.
    `

    // Gửi email (sử dụng service email như Resend, SendGrid, etc.)
    // Ở đây chúng ta sẽ log thông tin và trả về success
    console.log("Booking request:", emailContent)

    // Trong thực tế, bạn sẽ tích hợp với service gửi email thật
    // Ví dụ với Resend:
    // await resend.emails.send({
    //   from: 'booking@mocchautripcar.com',
    //   to: 'mocchaust64@gmail.com',
    //   subject: 'Yêu cầu đặt xe mới',
    //   text: emailContent,
    // })

    return NextResponse.json({
      success: true,
      message: "Yêu cầu đặt xe đã được gửi thành công!",
    })
  } catch (error) {
    console.error("Error sending booking request:", error)
    return NextResponse.json({ success: false, message: "Có lỗi xảy ra, vui lòng thử lại!" }, { status: 500 })
  }
}
