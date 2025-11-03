import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="glass border-b border-white/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Về VillaStay</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Khám phá câu chuyện của chúng tôi và cam kết cung cấp trải nghiệm kỳ nghỉ sang trọng tốt nhất
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-glass-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <p className="text-foreground/70 mb-4">
                VillaStay được thành lập với tầm nhìn cung cấp những trải nghiệm kỳ nghỉ sang trọng không quên. Biệt thự tuyệt đẹp 5 phòng ngủ của chúng tôi được thiết kế để phục vụ các gia đình, nhóm, và những ai tìm kiếm chuyến đi ngoài cùng tuyệt vời.
              </p>
              <p className="text-foreground/70 mb-6">
                Với một hồ bơi riêng, bếp BBQ hiện đại, và các tiện nghi cao cấp, chúng tôi đã tạo ra một nơi trú ẩn nơi những kỷ niệm được tạo ra và những giấc mơ trở thành hiện thực.
              </p>
              <Link to="/booking">
                <Button>
                  Đặt Phòng Ngay
                </Button>
              </Link>
            </div>
            <div className="glass rounded-3xl h-96 flex items-center justify-center">
              <p className="text-foreground/40">Hình Ảnh Biệt Thự</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Giá Trị Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Xuất Sắc", desc: "Chất lượng cao cấp trong mọi chi tiết" },
              { icon: Users, title: "Tính Hiếu Khách", desc: "Dịch vụ khách hàng ngoài lệ" },
              { icon: Heart, title: "Chăm Sóc", desc: "Sự thoải mái của bạn là ưu tiên của chúng tôi" },
              { icon: Globe, title: "Cộng Đồng", desc: "Tạo ra những kết nối lâu dài" },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="glass-card text-center rounded-2xl">
                  <Icon size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/60 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 glass rounded-3xl m-8 md:m-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Trải Nghiệm Sự Sống Sang Trọng</h2>
          <Link to="/booking">
            <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-accent text-white rounded-xl">
              Đặt Biệt Thự Ngay
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
