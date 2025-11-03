import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar, Users, Home } from "lucide-react";

export default function Booking() {
  const [bookingType, setBookingType] = useState<"day" | "week" | "villa">("day");
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Yêu cầu đặt phòng được gửi! Đội ngũ của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="glass border-b border-white/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Đặt Phòng Của Bạn</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Các tùy chọn đặt phòng linh hoạt cho kỳ nghỉ hoàn hảo của bạn
          </p>
        </div>
      </section>

      {/* Booking Type Selection */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Chọn Loại Đặt Phòng</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { value: "day", label: "Đặt Theo Ngày", icon: Calendar },
              { value: "week", label: "Đặt Theo Tuần", icon: Calendar },
              { value: "villa", label: "Thuê Toàn Bộ Biệt Thự", icon: Home },
            ].map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.value}
                  onClick={() => setBookingType(type.value as "day" | "week" | "villa")}
                  className={`p-6 glass rounded-2xl transition-all duration-200 ${
                    bookingType === type.value
                      ? "border-primary/50 bg-white/40"
                      : "hover:bg-white/30"
                  }`}
                >
                  <Icon size={32} className="text-primary mb-3" />
                  <p className="font-semibold text-foreground">{type.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Chi Tiết Của Bạn</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Ngày Nhận Phòng
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  required
                  className="glass-input w-full"
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Ngày Trả Phòng
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  required
                  className="glass-input w-full"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Số Lượng Khách
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="glass-input w-full"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} Khách
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="glass-input w-full"
                  placeholder="Nguyễn"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Họ
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="glass-input w-full"
                  placeholder="Văn A"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="glass-input w-full"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-2">Điện Thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="glass-input w-full"
                placeholder="+84 123 456 7890"
              />
            </div>

            {/* Payment Methods Info */}
            <div className="mb-8 p-4 glass-sm rounded-xl">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold">Phương Thức Thanh Toán:</span> Chúng tôi chấp nhận Visa, Mastercard, chuyển khoản ATM, Momo, và Zalopay. Các chi tiết sẽ được cung cấp sau khi xác nhận đặt phòng.
              </p>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              Yêu Cầu Đặt Phòng
            </Button>

            <p className="text-xs text-foreground/60 text-center mt-4">
              Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận đặt phòng và chi tiết thanh toán.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
