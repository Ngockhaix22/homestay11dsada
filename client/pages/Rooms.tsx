import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Maximize2, Bath } from "lucide-react";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Phòng Chính",
      capacity: "2 khách",
      size: "450 m²",
      beds: "1 Giường King",
      bathrooms: "2",
      amenities: ["Ban Công Riêng", "View Biển", "Bồn Tắm Jacuzzi"],
      price: "₫5.000.000/đêm",
    },
    {
      id: 2,
      name: "Phòng Deluxe",
      capacity: "2 khách",
      size: "350 m²",
      beds: "1 Giường Queen",
      bathrooms: "1",
      amenities: ["View Núi", "Vòi Sen Spa", "Chăn Ga Cao Cấp"],
      price: "₫4.000.000/đêm",
    },
    {
      id: 3,
      name: "Phòng Gia Đình",
      capacity: "4 khách",
      size: "500 m²",
      beds: "1 Giường Queen + 2 Giường Đơn",
      bathrooms: "2",
      amenities: ["Phòng Khách", "Bếp Nhỏ", "Khu Trẻ Em"],
      price: "₫6.000.000/đêm",
    },
    {
      id: 4,
      name: "Phòng Đôi",
      capacity: "2 khách",
      size: "300 m²",
      beds: "2 Giường Đơn",
      bathrooms: "1",
      amenities: ["Ban Công Chung", "View Vườn", "Bàn Làm Việc"],
      price: "₫3.500.000/đêm",
    },
    {
      id: 5,
      name: "Phòng Vườn Hạng Sang",
      capacity: "3 khách",
      size: "400 m²",
      beds: "1 Giường Queen + 1 Giường Đơn",
      bathrooms: "1",
      amenities: ["Truy Cập Vườn Trực Tiếp", "Sân Riêng", "Vòi Sen Ngoài Trời"],
      price: "₫4.700.000/đêm",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="glass border-b border-white/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Các Phòng Của Chúng Tôi</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Chọn từ 5 phòng ngủ được thiết kế tinh tế, mỗi phòng mang lại sự thoải mái và sang trọng độc nhất
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="glass-card overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-48 glass-sm -m-6 mb-0 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-160918710${1000 + room.id}?w=500&q=80&auto=format&fit=crop`}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{room.name}</h3>
                  <p className="text-primary font-semibold mb-4">{room.price}</p>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Users size={16} />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Maximize2 size={16} />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Bath size={16} />
                      <span>{room.bathrooms} Phòng Tắm</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground/60 mb-2">Tiện Nghi:</p>
                    <ul className="space-y-1">
                      {room.amenities.map((amenity, idx) => (
                        <li key={idx} className="text-sm text-foreground/70">
                          • {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/booking">
                    <Button className="w-full">
                      Đặt Phòng Này
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
