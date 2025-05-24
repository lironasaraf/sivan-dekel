
import { Plane, CheckCircle, MapPin, Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const AthensConsultationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const consultationIncludes = [
    "שיחת ייעוץ להבנת הצורך ולבניית טיול מותאם",
    "המלצות למקומות: חופים, מסעדות פשוטות ויוקרתיות",
    "המלצות לטברנות ליום וללילה, מועדונים, ברים",
    "המלצות למוזאונים, גלריות וסיורי אוכל",
    "סגירת מקומות לטברנות ולהופעות"
  ];

  return (
    <section 
      id="athens-consultation" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-greek-gold/10 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            חבילת ייעוץ לאתונה
          </h2>
          <p className={`text-xl text-gray-700 mt-4 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            הכנה מושלמת לטיול באתונה עם ייעוץ מקצועי ומותאם אישית
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`greek-card ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute -left-2 -bottom-2 w-full h-full border-2 border-greek-gold rounded-lg"></div>
                  <img
                    src="/lovable-uploads/5dce7c4a-a42e-4c3a-bc23-f76c2f6ef3c2.png"
                    alt="אתונה - נוף עירוני יפה"
                    className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 text-right">
                <div className="flex justify-end items-center gap-3 mb-6">
                  <h3 className="text-2xl font-heading text-greek-blue">חבילת ייעוץ מקצועית</h3>
                  <Plane className="h-8 w-8 text-greek-gold" />
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-greek-blue">250 ₪</span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-greek-blue mb-3">החבילה כוללת:</h4>
                  {consultationIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-greek-turquoise flex-shrink-0 mt-0.5" />
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="greek-button">
                    <Star className="h-5 w-5 ml-2" />
                    הזמן ייעוץ עכשיו
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthensConsultationSection;
