import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      alert("Đăng nhập thành công!");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
      }
      alert("Tài khoản được tạo thành công!");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="glass-card rounded-3xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {isLogin ? "Chào Mừng Trở Lại" : "Tham Gia Với Chúng Tôi"}
              </h2>
              <p className="text-foreground/60">
                {isLogin ? "Đăng nhập vào tài khoản của bạn" : "Tạo tài khoản để đặt phòng của bạn"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Register Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tên Đầy Đủ
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-3 text-foreground/40" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="glass-input w-full pl-10"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Địa Chỉ Email
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-3 text-foreground/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-input w-full pl-10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mật Khẩu
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-3 text-foreground/40" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="glass-input w-full pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Confirm Password Field (Register Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Xác Nhận Mật Khẩu
                  </label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-3 top-3 text-foreground/40" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="glass-input w-full pl-10"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {/* Remember Me / Forgot Password (Login Only) */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded glass"
                    />
                    <span className="text-foreground/60">Ghi nhớ tôi</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primary/80 font-semibold">
                    Quên mật khẩu?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                {isLogin ? "Đăng Nhập" : "Tạo Tài Khoản"}
              </Button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="mt-6 text-center">
              <p className="text-foreground/60 text-sm">
                {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  {isLogin ? "Đăng Ký" : "Đăng Nhập"}
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-foreground/60 text-sm mb-4">Hoặc tiếp tục với</p>
              <div className="flex gap-4">
                <Button variant="ghost" className="flex-1">
                  Google
                </Button>
                <Button variant="ghost" className="flex-1">
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-foreground/60 text-xs mt-6">
            Bằng cách đăng nhập, bạn đồng ý với{" "}
            <a href="#" className="text-primary hover:underline">
              Điều Khoản Dịch Vụ
            </a>{" "}
            và{" "}
            <a href="#" className="text-primary hover:underline">
              Chính Sách Bảo Mật
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
