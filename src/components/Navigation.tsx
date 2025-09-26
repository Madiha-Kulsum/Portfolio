import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDownloadResume = () => {
  const link = document.createElement('a');
  // BASE_URL already includes /Portfolio/ from vite.config.js
  link.href = `${import.meta.env.BASE_URL}Madiha_Kulsum_Resume.pdf`;
  link.target = '_blank';   // open in new tab
  link.download = 'Madiha_Kulsum_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Resume Download Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={() => {
                  handleDownloadResume();
                  setIsOpen(false);
                }}
                variant="outline"
                size="sm"
                className="w-full mt-2 flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;