import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Wifi, ChefHat, Waves, Home, MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";

export default function Index() {
  const bookingOptions = [
    {
      id: 1,
      title: "Đặt Theo Ngày",
      description: "Hoàn hảo cho những chuyến du lịch cuối tuần và lưu trú ngắn hạn",
      price: "Từ 299.000₫/đêm",
      icon: Clock,
    },
    {
      id: 2,
      title: "Đặt Theo Tuần",
      description: "Tận hưởng một tuần lạc quan với giá đặc biệt",
      price: "Từ 1.890.000₫/tuần",
      icon: Home,
    },
    {
      id: 3,
      title: "Thuê Toàn Bộ Biệt Thự",
      description: "Quyền truy cập độc quyền vào toàn bộ tài sản",
      price: "Giá nhóm đặc biệt có sẵn",
      icon: Users,
    },
  ];

  const amenities = [
    {
      id: 1,
      icon: Waves,
      title: "Hồ Bơi",
      description: "Hồ bơi vô cực với tầm nhìn tuyệt đẹp",
    },
    {
      id: 2,
      icon: ChefHat,
      title: "Bếp Nướng BBQ",
      description: "Bếp ngoài trời được trang bị đầy đủ cho những buổi tụ họp",
    },
    {
      id: 3,
      icon: Wifi,
      title: "WiFi Cao Tốc",
      description: "Luôn kết nối với internet cao cấp khắp nơi",
    },
    {
      id: 4,
      icon: Home,
      title: "5 Phòng Ngủ Rộng",
      description: "Các phòng được thiết kế tinh tế với tiện nghi cao cấp",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thị Sarah",
      role: "Du Khách Hạng Sang",
      text: "VillaStay mang đến trải nghiệm tuyệt vời nhất. Biệt thự vượt quá mong đợi của chúng tôi!",
      rating: 5,
    },
    {
      id: 2,
      name: "Trần Văn Michael",
      role: "Kỳ Nghỉ Gia Đình",
      text: "Hoàn hảo cho cuộc họp mặt gia đình. Hồ bơi và bếp BBQ tạo nên kỷ niệm không quên.",
      rating: 5,
    },
    {
      id: 3,
      name: "Hoàng Thị Emma",
      role: "Sự Kiện Công Ty",
      text: "Vị trí lý tưởng cho cuộc gặp gỡ đội. Rất khuyên bảo cho bất kỳ dịp nào.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-400/10 rounded-full -mr-48 blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-orange-300/20 to-orange-400/10 rounded-full -ml-48 blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-300/15 to-pink-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-glass-in">
              <div className="mb-6 inline-block">
                <span className="px-4 py-2 rounded-full glass text-primary font-semibold text-sm">
                  ✨ Trải Nghiệm Cho Thuê Biệt Thự Hạng Sang
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Biệt Thự Mơ Ước Của Bạn
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
                Trải nghiệm accommodation hạng sang với 5 phòng ngủ, hồ bơi riêng, và bếp BBQ đẳng cấp thế giới. Hoàn hảo cho gia đình, nhóm, và các buổi lễ kỷ niệm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button size="lg" className="w-full sm:w-auto">
                    Đặt Phòng Ngay
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/rooms">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Xem Phòng
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="glass-sm p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5</p>
                  <p className="text-sm text-foreground/70 mt-2 font-medium">Phòng Ngủ</p>
                </div>
                <div className="glass-sm p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1</p>
                  <p className="text-sm text-foreground/70 mt-2 font-medium">Hồ Bơi</p>
                </div>
                <div className="glass-sm p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.9★</p>
                  <p className="text-sm text-foreground/70 mt-2 font-medium">Đánh Giá Khách</p>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="animate-glass-fade relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/20 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative h-96 md:h-full min-h-96 overflow-hidden rounded-3xl border-2 border-white/40 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop"
                  alt="Biệt thự hạng sang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="lg" className="relative z-20">
                    Xem Tất Cả Ảnh
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-glass-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chọn Kỳ Nghỉ Hoàn Hảo
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Các tùy chọn đặt phòng linh hoạt để phù hợp nhu cầu và ngân sách của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  className="glass-card group relative overflow-hidden"
                  style={{
                    animation: `glassFade 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-block p-4 glass-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{option.description}</p>
                    <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">{option.price}</p>
                    <Link to="/booking">
                      <Button variant="outline" className="w-full font-semibold">
                        Tìm Hiểu Thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-glass-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tiện Nghi Cao Cấp
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Tất cả những gì bạn cần cho một chuyến đi hoàn hảo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.id}
                  className="glass-card text-center group relative overflow-hidden"
                  style={{
                    animation: `glassFade 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 glass-sm rounded-full group-hover:scale-125 transition-transform duration-300">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{amenity.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-glass-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Yêu Thích Của Khách Hàng
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Những trải nghiệm thực tế từ những du khách hài lòng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card group relative overflow-hidden"
                style={{
                  animation: `glassFade 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed">{testimonial.text}</p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glass m-8 md:m-20 rounded-3xl overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sẵn Sàng Đặt Kỳ Nghỉ Mơ Ước?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Đặt ngày của bạn ngay bây giờ và trải nghiệm sự sang trọng như chưa từng có
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="px-8">
                  Đặt Ngay
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Liên Hệ Chúng Tôi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
