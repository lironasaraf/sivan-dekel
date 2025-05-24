
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
          <div className={`w-full md:w-1/2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative hover:scale-105 transition-all duration-500">
                <div className="absolute -left-2 -bottom-2 w-full h-full border-2 border-greek-turquoise rounded-lg"></div>
                <img
                  src="/lovable-uploads/f1a318df-4d71-4278-bb22-18470931c264.png"
                  alt="Greek island terrace view"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative hover:scale-105 transition-all duration-500 mt-8 md:mt-16">
                <div className="absolute -left-2 -bottom-2 w-full h-full border-2 border-greek-gold rounded-lg"></div>
                <img
                  src="/lovable-uploads/6dda7237-8549-4057-8965-278c79c1f1.png"
                  alt="Vintage music player"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="greek-card text-right hover:shadow-xl transition-all duration-300">
              <div className="flex justify-end items-center gap-3 mb-4">
                <h3 className="text-2xl font-serif text-greek-blue">איך הכל התחיל?</h3>
                <Book className="h-6 w-6 text-greek-gold animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              
              <p className="text-lg text-gray-700 mb-4">
                הכול התחיל מצלילי הבוזוקי והבגלמה, בגיל עשר האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית, כך נולדה לה המחברת היוונית הראשונה שלי.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                כשגדלתי טיילתי ביוון, התאהבתי בפשטות, בקסם, באווירה השמחה והנעימה, ובעיקר באנשים ובשפה.
                לאחר הלימודים האקדמיים החלטתי להתגורר באתונה, לספוג את האווירה מזווית נוספת, מקומית יותר.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                כשהתחלתי להבין יוונית ולשוחח עימם, הקסם קרה. ידיעת השפה יצרה אינטימיות, קרבה וחיבור עם מקומיים והחוויה שלי ביוון הפכה לתוססת, קסומה ומעניינת הרבה יותר.
                הבנתי שהדבר האמיתי שאני רוצה לעשות זה להעביר את התחושה הזו הלאה.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                ליצור מרחב קהילתי מאחד וחם שבו אנשים ילמדו יוונית, ויתאהבו בה – דרך צחוק, אוכל, שירים ותרבות.
                ואכן, הקסם קרה. אנשים הגיעו אלי מפה לאוזן, ונוצרו להן קהילות לימודיות אינטימיות המשלבות לימוד מקצועי, חברויות חדשות ובעיקר כיף אמיתי.
              </p>
              
              <p className="text-lg text-gray-700">
                היום, אחרי מאות תלמידים, שיקמתי את הביטחון העצמי של רבים, הוכחתי לאנשים שהם יצליחו לדבר והשפה היוונית לא כל כך קשה כפי שנוטים לחשוב.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
