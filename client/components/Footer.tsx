import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "Về Chúng Tôi", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Cơ Hội Việc Làm", href: "/careers" },
      { label: "Báo Chí", href: "/press" },
    ],
    support: [
      { label: "Liên Hệ Chúng Tôi", href: "/contact" },
      { label: "Câu Hỏi Thường Gặp", href: "/faq" },
      { label: "Hỗ Trợ", href: "/support" },
      { label: "Hướng Dẫn Đặt Phòng", href: "/guide" },
    ],
    legal: [
      { label: "Chính Sách Bảo Mật", href: "/privacy" },
      { label: "Điều Khoản Dịch Vụ", href: "/terms" },
      { label: "Chính Sách Hủy Phòng", href: "/cancellation" },
      { label: "Chính Sách Cookie", href: "/cookies" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white mt-20 border-t border-primary/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <span className="font-bold text-2xl block">VillaStay</span>
                <span className="text-xs text-primary/70">Premium Villa Rentals</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Cho thuê biệt thự hạng sang với view tuyệt đẹp, 5 phòng ngủ, hồ bơi riêng và bếp nướng BBQ.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary hover:to-accent transition-all duration-300 flex items-center justify-center text-white/70 hover:text-white shadow-lg hover:shadow-primary/30"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary hover:to-accent transition-all duration-300 flex items-center justify-center text-white/70 hover:text-white shadow-lg hover:shadow-primary/30"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary hover:to-accent transition-all duration-300 flex items-center justify-center text-white/70 hover:text-white shadow-lg hover:shadow-primary/30"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-base">Công Ty</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-base">Hỗ Trợ</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-base">Pháp Lý</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-base">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary/70" />
                <span>123 Đường Villa, Thành Phố Thiên Đường, VN 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={18} className="text-primary/70" />
                <span>+84 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={18} className="text-primary/70" />
                <span>info@villastay.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-white/50">
            <p>&copy; {currentYear} VillaStay. Tất cả quyền được bảo vệ.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Chính Sách Bảo Mật
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Điều Khoản Dịch Vụ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
