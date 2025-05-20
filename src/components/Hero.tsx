
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-gray-50 to-greek-sand/20"
    >
      <div className="absolute inset-0 bg-greek-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-right">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-greek-blue mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              לימוד יוונית בדרך ישראלית
            </h1>
            <p className={`text-lg md:text-xl text-gray-700 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              למדו את השפה היוונית בצורה מהנה, אפקטיבית ומותאמת אישית עם מורה ישראלית בעלת ניסיון
            </p>
            <div className={`flex gap-4 justify-end ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button className="greek-button hover:scale-105 transition-transform">צרו קשר</Button>
              </Link>
              <Link to="course" smooth={true} duration={500} offset={-80}>
                <Button className="greek-button-secondary hover:scale-105 transition-transform">תכני הקורס</Button>
              </Link>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-center md:justify-end ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 w-full h-full border-2 border-greek-gold rounded-lg animate-pulse"></div>
              <img
                src="/lovable-uploads/e22e17ac-b1f5-4740-a8c7-07c311dbc0a6.png"
                alt="Woman in Greece"
                className="w-full max-w-md rounded-lg shadow-lg object-cover hover:shadow-xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
