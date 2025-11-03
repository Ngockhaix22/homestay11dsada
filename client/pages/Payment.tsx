import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreditCard, Wallet, Home, Users, Calendar, Shield, Check, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState<string>("card");
  const [bookingData] = useState({
    checkIn: "2024-03-15",
    checkOut: "2024-03-22",
    guests: 6,
    nights: 7,
    pricePerNight: 5000000,
  });

  const totalPrice = bookingData.nights * bookingData.pricePerNight;
  const tax = totalPrice * 0.1;
  const serviceFee = totalPrice * 0.05;
  const finalTotal = totalPrice + tax + serviceFee;

  const paymentMethods = [
    {
      id: "card",
      label: "Thẻ Tín Dụng / Ghi Nợ",
      icon: CreditCard,
      description: "Visa, Mastercard",
    },
    {
      id: "wallet",
      label: "Ví Điện Tử",
      icon: Wallet,
      description: "Momo, Zalopay",
    },
    {
      id: "bank",
      label: "Chuyển Khoản Ngân Hàng",
      icon: Home,
      description: "ATM, Chuyển khoản trực tiếp",
    },
  ];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanh toán đang được xử lý. Cảm ơn bạn đã lựa chọn VillaStay!");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Hoàn Tất Thanh Toán</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Chọn phương thức thanh toán của bạn và hoàn tất đặt phòng của bạn một cách an toàn
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Payment Methods */}
            <div className="lg:col-span-2">
              {/* Booking Summary */}
              <div className="glass-card rounded-2xl p-8 border border-primary/10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Chi Tiết Đặt Phòng</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Calendar size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Nhận Phòng</p>
                      <p className="font-semibold text-foreground">{bookingData.checkIn}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Calendar size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Trả Phòng</p>
                      <p className="font-semibold text-foreground">{bookingData.checkOut}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Số Khách</p>
                      <p className="font-semibold text-foreground">{bookingData.guests} Người</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center">
                      <Home size={32} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Biệt Thự 5 Phòng Ngủ</p>
                      <p className="font-semibold text-foreground text-lg">VillaStay Premium</p>
                      <p className="text-sm text-primary mt-1">Hồ bơi, BBQ, View tuyệt đẹp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Chọn Phương Thức Thanh Toán</h2>
                <div className="grid grid-cols-1 gap-4">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 group cursor-pointer ${
                          selectedPayment === method.id
                            ? "border-primary bg-primary/10"
                            : "border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all ${
                              selectedPayment === method.id
                                ? "bg-primary/30 text-primary"
                                : "bg-white/10 text-foreground/60 group-hover:text-primary"
                            }`}>
                              <Icon size={28} />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-foreground">{method.label}</p>
                              <p className="text-sm text-foreground/60">{method.description}</p>
                            </div>
                          </div>
                          {selectedPayment === method.id && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                              <Check size={16} className="text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePayment} className="glass-card rounded-2xl p-8 border border-primary/10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Thông Tin Thanh Toán</h2>

                {selectedPayment === "card" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Số Thẻ
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="glass-input w-full"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Hết Hạn
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="glass-input w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="glass-input w-full"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Tên Chủ Thẻ
                      </label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        className="glass-input w-full"
                        required
                      />
                    </div>
                  </div>
                )}

                {selectedPayment === "wallet" && (
                  <div className="space-y-6">
                    <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="text-foreground/70 mb-4">
                        Bạn sẽ được chuyển hướng đến <span className="font-semibold text-primary">Momo</span> hoặc <span className="font-semibold text-primary">Zalopay</span> để hoàn thành thanh toán.
                      </p>
                      <p className="text-sm text-foreground/60">
                        Thanh toán sẽ được xử lý một cách an toàn thông qua nền tảng của họ.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Số Điện Thoại
                      </label>
                      <input
                        type="tel"
                        placeholder="+84 123 456 7890"
                        className="glass-input w-full"
                        required
                      />
                    </div>
                  </div>
                )}

                {selectedPayment === "bank" && (
                  <div className="space-y-6">
                    <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="text-foreground/70 mb-4">
                        Chúng tôi sẽ cung cấp chi tiết tài khoản ngân hàng cho thanh toán.
                      </p>
                      <p className="text-sm text-foreground/60">
                        Vui lòng đảm bảo chuyển đúng số tiền và kèm theo mã tham chiếu để xác nhận thanh toán.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="glass-input w-full"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Security Info */}
                <div className="mt-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20 flex items-start gap-3">
                  <Shield size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-600 mb-1">Thanh Toán An Toàn</p>
                    <p className="text-sm text-green-600/80">
                      Tất cả giao dịch được mã hóa bằng SSL. Thông tin của b��n được bảo vệ hoàn toàn.
                    </p>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="mt-8 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 cursor-pointer"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-foreground/70 cursor-pointer">
                    Tôi đồng ý với <Link to="/terms" className="text-primary hover:underline">Điều Khoản Dịch Vụ</Link> và <Link to="/privacy" className="text-primary hover:underline">Chính Sách Bảo Mật</Link>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full mt-8 bg-gradient-to-r from-primary to-accent text-white">
                  <Lock size={20} className="mr-2" />
                  Xác Nhận Thanh Toán ({finalTotal.toLocaleString()} VND)
                </Button>
              </form>
            </div>

            {/* Right Column - Price Summary */}
            <div>
              <div className="glass-card rounded-2xl p-8 border border-primary/10 sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-8">Tóm Tắt Giá</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">
                      {bookingData.nights} Đêm x {bookingData.pricePerNight.toLocaleString()} VND
                    </span>
                    <span className="font-semibold text-foreground">
                      {totalPrice.toLocaleString()} VND
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Thuế (10%)</span>
                    <span className="font-semibold text-foreground">
                      {tax.toLocaleString()} VND
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Phí Dịch Vụ (5%)</span>
                    <span className="font-semibold text-foreground">
                      {serviceFee.toLocaleString()} VND
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8 bg-primary/10 p-4 rounded-xl">
                  <span className="font-semibold text-foreground">Tổng Cộng</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {finalTotal.toLocaleString()} VND
                  </span>
                </div>

                {/* Inclusions */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Bao Gồm</h3>
                  {[
                    "Phòng Ngủ 5 Phòng",
                    "Hồ Bơi Riêng",
                    "Bếp BBQ",
                    "WiFi Tốc Độ Cao",
                    "Hỗ Trợ 24/7",
                    "Dọn Dẹp Hàng Ngày",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Cancellation Policy */}
                <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <p className="text-xs font-semibold text-blue-600 mb-2">HỦY MIỄN PHÍ</p>
                  <p className="text-xs text-blue-600/80">
                    Hủy miễn phí tới 7 ngày trước khi nhận phòng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Các Câu Hỏi Thường Gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Làm Cách Nào Để Hủy Đặt Phòng?",
                a: "Bạn có thể hủy miễn phí tới 7 ngày trước khi nhận phòng. Liên hệ với đội ngũ hỗ trợ của chúng tôi để biết thêm chi tiết.",
              },
              {
                q: "Phương Thức Thanh Toán Nào Được Chấp Nhận?",
                a: "Chúng tôi chấp nhận Visa, Mastercard, Momo, Zalopay, và chuyển khoản ngân hàng.",
              },
              {
                q: "Thanh Toán Có An Toàn Không?",
                a: "Có, tất cả giao dịch được mã hóa bằng SSL 256-bit. Thông tin của bạn được bảo vệ hoàn toàn.",
              },
              {
                q: "Tôi Có Cần Thanh Toán Toàn Bộ Ngay Không?",
                a: "Bạn cần thanh toán 50% để xác nhận đặt phòng. Phần còn lại có thể thanh toán 7 ngày trước nhận phòng.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-8 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-3 text-lg">{faq.q}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
