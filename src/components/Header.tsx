
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled down as a percentage (max 20%)
      const scrollPercentage = Math.min((window.scrollY / 300) * 100, 20);
      setScrollProgress(scrollPercentage);
      
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'מי אני', link: 'about' },
    { name: 'איך הכל התחיל', link: 'story' },
    { name: 'מה אני מציעה', link: 'offer' },
    { name: 'תכני הקורס', link: 'course' },
    { name: 'הספר שלי', link: 'book' },
    { name: 'יצירת קשר', link: 'contact' },
  ];

  // Calculate background opacity based on scroll
  const headerOpacity = isScrolled ? 0.8 - (scrollProgress / 100) : 0.95;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-sm shadow-sm' 
          : 'shadow-sm'
      }`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${headerOpacity})` }}
    >
      <div className="container mx-auto py-3 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/greece-flag.svg"
              alt="Greek Flag"
              className="h-8 w-12 mr-2 animate-pulse"
            />
            <h1 className="text-xl md:text-2xl font-serif font-bold text-greek-blue">
              יוונית <span className="text-greek-gold">לכל</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6 flex-row-reverse">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-700 hover:text-greek-blue font-medium cursor-pointer transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-greek-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-greek-blue"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-3">
            <ul className="flex flex-col items-end space-y-4">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-700 hover:text-greek-blue font-medium cursor-pointer transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
