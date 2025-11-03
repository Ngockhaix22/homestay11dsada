import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholder routes for other pages - can be implemented later */}
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/press" element={<PlaceholderPage title="Press" />} />
          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
          <Route path="/support" element={<PlaceholderPage title="Support" />} />
          <Route path="/guide" element={<PlaceholderPage title="Booking Guide" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/cancellation" element={<PlaceholderPage title="Cancellation Policy" />} />
          <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
          {/* CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-2xl glass rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-foreground/60 mb-8">
            Trang này sắp có. Hãy theo dõi không gian này để cập nhật!
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg transition-all font-semibold"
          >
            Quay Lại Trang Chủ
          </a>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
