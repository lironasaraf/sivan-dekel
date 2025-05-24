
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
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-l from-gray-50 to-greek-sand/20"
    >
      <div className="absolute inset-0 bg-greek-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-right">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-hero font-bold text-greek-blue mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              לימוד יוונית בדרך ישראלית
            </h1>
            <p className={`text-lg md:text-xl text-gray-700 mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
              למדו את השפה היוונית בצורה מהנה, אפקטיבית ומותאמת אישית עם מורה ישראלית בעלת ניסיון
            </p>
            <div className={`flex gap-6 justify-end mr-0 md:mr-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button className="greek-button hover:scale-110 transition-all duration-300 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl font-semibold">צרו קשר</Button>
              </Link>
              <Link to="course" smooth={true} duration={500} offset={-80}>
                <Button className="greek-button-secondary hover:scale-110 transition-all duration-300 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl font-semibold">תכני הקורס</Button>
              </Link>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-center md:justify-start transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-greek-gold rounded-lg animate-pulse"></div>
              <img
                src="/lovable-uploads/19cb92b5-51f8-4369-bedf-303197adffd8.png"
                alt="סיון בצלאל בסביבה יוונית מסורתית"
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
