
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
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
      className="relative py-20 md:py-32 bg-gradient-to-br from-greek-blue via-greek-lightBlue to-white overflow-hidden"
    >
      {/* אלמנטי רקע מונפשים בצבעי יוון */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-greek-blue opacity-40 rounded-full blur-2xl animate-pulse-slow delay-150"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-greek-gold opacity-20 rounded-full blur-3xl animate-pulse-slow delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-greek-turquoise opacity-25 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
        
        {/* פסים מעוררי השראה מהדגל היווני */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 w-full h-6 bg-white"></div>
          <div className="absolute top-12 w-full h-6 bg-greek-blue"></div>
          <div className="absolute top-24 w-full h-6 bg-white"></div>
          <div className="absolute bottom-24 w-full h-6 bg-white"></div>
          <div className="absolute bottom-12 w-full h-6 bg-greek-blue"></div>
          <div className="absolute bottom-0 w-full h-6 bg-white"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-right">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-4 bg-gradient-to-r from-white via-greek-gold to-white bg-clip-text text-transparent drop-shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              לימוד יוונית בדרך ישראלית
            </h1>
            <p className={`text-lg md:text-xl text-white/90 mb-8 font-medium drop-shadow-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
              למדו את השפה היוונית בצורה מהנה, אפקטיבית ומותאמת אישית עם מורה ישראלית בעלת ניסיון
            </p>
            <div className={`flex gap-6 justify-end transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button className="bg-white text-greek-blue hover:bg-greek-gold hover:text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-2xl font-semibold border-2 border-greek-gold">
                  צרו קשר
                </Button>
              </Link>
              <Link to="course" smooth={true} duration={500} offset={-80}>
                <Button className="bg-greek-gold text-white hover:bg-white hover:text-greek-blue hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-2xl font-semibold border-2 border-white">
                  תכני הקורס
                </Button>
              </Link>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-center md:justify-start transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative group">
              <div className="absolute -left-4 -top-4 w-full h-full border-4 border-greek-gold rounded-lg animate-pulse-slow group-hover:scale-105 transition-transform duration-500 shadow-xl"></div>
              <div className="absolute -right-2 -bottom-2 w-full h-full border-2 border-white rounded-lg opacity-50"></div>
              <img
                src="/lovable-uploads/19cb92b5-51f8-4369-bedf-303197adffd8.png"
                alt="סיון בצלאל בסביבה יוונית מסורתית"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
