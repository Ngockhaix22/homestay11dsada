import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Globe,
  Heart,
  Sparkles,
  Home,
  Zap,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles size={18} className="text-primary" />
            <span className="text-primary text-sm font-semibold">
              Về Chúng Tôi
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Kỳ Nghỉ Sang Trọng{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Không Quên
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Khám phá biệt thự tuyệt đẹp của chúng tôi - nơi kỳ vọng vượt quá
            hiện thực và mọi chi tiết được chăm sóc với tình yêu
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <Home className="text-primary mb-4" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Câu Chuyện Của Chúng Tôi
                </h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  VillaStay được thành lập với một tầm nhìn đơn giản: cung cấp
                  các trải nghiệm kỳ nghỉ sang trọng không quên cho các gia đình
                  và nhóm bạn. Biệt thự tuyệt đẹp 5 phòng ngủ của chúng tôi là
                  một tác phẩm kiến trúc hiện đại kết hợp với sự thoải mái và
                  tiện nghi.
                </p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Với một hồ bơi riêng toàn năm, bếp BBQ hiện đại, phòng giải
                  trí đầy đủ tiện nghi và các dịch vụ cá nhân hóa, chúng tôi đã
                  tạo ra một nơi trú ẩn nơi những kỷ niệm được tạo ra và những
                  giấc mơ trở thành hiện thực. Mỗi chi tiết được thiết kế với sự
                  chú ý đến độ chi tiết và chất lượng cao nhất.
                </p>
                <Link to="/booking">
                  <Button className="bg-gradient-to-r from-primary to-accent text-white">
                    Khám Phá Biệt Thự
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="glass-card rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Hiện Đại & Sang Trọng
                </h3>
                <p className="text-foreground/60">
                  Trang thiết bị hạng sang, nội thất cao cấp, và công nghệ thông
                  minh tối tân
                </p>
              </div>
              <div className="glass-card rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  An Toàn & Riêng Tư
                </h3>
                <p className="text-foreground/60">
                  Hệ thống bảo mật hiện đại, vị trí riêng tư, và sự an tâm tuyệt
                  đối
                </p>
              </div>
              <div className="glass-card rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Dịch Vụ Tuyệt Vời
                </h3>
                <p className="text-foreground/60">
                  Hỗ trợ 24/7, các dịch vụ đặc biệt, và sự chú ý đến từng chi
                  tiết
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Những Giá Trị Của Chúng Tôi
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Tại VillaStay, chúng tôi tin vào sự xuất sắc, sự chân thành và sự
              chăm sóc trong mọi khía cạnh của dịch vụ của chúng tôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Xuất Sắc",
                desc: "Chất lượng cao cấp trong mọi chi tiết, từ kiến trúc đến dịch vụ",
              },
              {
                icon: Users,
                title: "Hiếu Khách",
                desc: "Đón tiếp bạn như gia đình, dịch vụ khách hàng tuyệt vời",
              },
              {
                icon: Heart,
                title: "Chăm Sóc",
                desc: "Sự thoải mái của bạn là ưu tiên hàng đầu của chúng tôi",
              },
              {
                icon: Globe,
                title: "Cộng Đồng",
                desc: "Tạo ra những kết nối lâu dài với khách hàng trên toàn thế giới",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon
                      size={28}
                      className="text-primary group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Tại Sao Chọn VillaStay?
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto mb-16">
            Chúng tôi cung cấp những cơ sở vật chất tốt nhất và trải nghiệm chưa
            bao giờ có
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Phòng Ngủ Sang Trọng",
                desc: "Mỗi phòng được thiết kế với nội thất cao cấp và tiếp cận với công nghệ thông minh",
              },
              {
                title: "Hồ Bơi Riêng Toàn Năm",
                desc: "Thư giãn trong hồ bơi nước ấm với tầm nhìn tuyệt đẹp về cảnh quan",
              },
              {
                title: "Bếp BBQ Hiện Đại",
                desc: "Nấu nướng ngoài trời với bếp BBQ chuyên nghiệp và không gian ăn uống rộng rãi",
              },
              {
                title: "Phòng Giải Trí Đầy Đủ",
                desc: "Chiếu phim, chơi trò chơi, hoặc đơn giản là thư giãn trong phòng khách rộng rãi",
              },
              {
                title: "Dịch Vụ Đặc Biệt",
                desc: "Nấu ăn cá nhân hóa, lưu ý tối tân, và các dịch vụ đặc biệt theo yêu cầu",
              },
              {
                title: "Hỗ Trợ 24/7",
                desc: "Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ bất cứ khi nào bạn cần",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
        <div className="relative container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sẵn Sàng Trải Nghiệm Sang Trọng?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Hãy để VillaStay tạo ra kỳ nghỉ hoàn hảo cho bạn. Đặt biệt thự của
            chúng tôi ngay hôm nay và tạo ra những kỷ niệm lâu dài.
          </p>
          <Link to="/booking">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Đặt Biệt Thự Ngay
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
