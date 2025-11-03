import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 py-20 px-4">
        <div className="text-center max-w-lg">
          <div className="text-8xl font-bold text-primary/40 mb-6">404</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-lg text-foreground/60 mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back to exploring our luxury villa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home size={20} />
                Back to Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-primary/10 transition-colors font-semibold"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
