import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Trang Chủ", href: "/" },
    { label: "Phòng", href: "/rooms" },
    { label: "Đặt Phòng", href: "/booking" },
    { label: "Về Chúng Tôi", href: "/about" },
    { label: "Liên Hệ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">VillaStay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-foreground/80 hover:text-foreground hover:bg-white/20 rounded-xl transition-all">
                Đăng Nhập
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 transition-all rounded-xl">
                Đặt Phòng
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 animate-glass-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-white/20 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4 py-4 pt-4 border-t border-white/20">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full rounded-xl">
                  Đăng Nhập
                </Button>
              </Link>
              <Link to="/login" className="flex-1">
                <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-accent">
                  Đặt Phòng
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
