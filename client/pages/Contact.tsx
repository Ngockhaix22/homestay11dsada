import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ phản hồi sớm.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="glass border-b border-white/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Liên Hệ Chúng Tôi</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Có câu hỏi? Chúng tôi rất muốn nghe từ bạn
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Thông Tin Liên Hệ</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Địa Chỉ</h3>
                    <p className="text-foreground/60">123 Đường Villa, Thành Phố Thiên Đường, VN 12345</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Điện Thoại</h3>
                    <p className="text-foreground/60">+84 123 456 7890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/60">info@villastay.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Giờ Làm Việc</h3>
                    <p className="text-foreground/60">
                      Thứ 2 - Chủ nhật: 8:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tên</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-input w-full"
                      placeholder="Tên của bạn"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-input w-full"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Chủ Đề</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass-input w-full"
                      placeholder="Chúng tôi có thể giúp gì?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tin Nhắn</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass-input w-full resize-none"
                      placeholder="Tin nhắn của bạn..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-white rounded-xl">
                    Gửi Tin Nhắn
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="glass rounded-3xl h-96 flex items-center justify-center text-foreground/40">
            <p className="text-xl">Tích hợp Bản đồ Sắp Có</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
