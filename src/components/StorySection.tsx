
import { Book } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState, useRef } from 'react';

const StorySection = () => {
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

  return (
    <section 
      id="story" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>איך הכל התחיל</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className={`w-full md:w-2/5 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -left-4 -bottom-4 w-full h-full border-2 border-greek-turquoise rounded-lg"></div>
              <div className="rounded-lg overflow-hidden hover:scale-105 transition-all duration-500">
                <AspectRatio ratio={4/3}>
                  <img
                    src="/lovable-uploads/37bc9bec-1f13-4ff0-be3a-1951a4e75370.png"
                    alt="Greek flag elements"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-3/5 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="greek-card text-right hover:shadow-xl transition-all duration-300">
              <div className="flex justify-end items-center gap-3 mb-4">
                <h3 className="text-2xl font-serif text-greek-blue">הסיפור שלי עם יוון</h3>
                <Book className="h-6 w-6 text-greek-gold animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              
              <p className="text-lg text-gray-700 mb-4">
                הסיפור שלי עם יוון החל לפני שנים רבות כשביקרתי באתונה לראשונה. התאהבתי מיד בתרבות, באנשים ובשפה היוונית. החלטתי ללמוד את השפה באופן רציני.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                לאחר מספר שנים של לימודים אינטנסיביים באוניברסיטת אתונה והתגוררות ביוון, הפכתי למורה ליוונית. הבנתי שיש חסר במורים דוברי עברית שיכולים להנגיש את השפה היוונית לישראלים בצורה יעילה ומותאמת.
              </p>
              
              <p className="text-lg text-gray-700">
                החלטתי לפתח שיטת לימוד ייחודית המותאמת במיוחד לדוברי עברית, תוך שימת דגש על הדמיון והשוני בין השפות, מה שהופך את תהליך הלמידה למהיר ואפקטיבי יותר עבור ישראלים.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
