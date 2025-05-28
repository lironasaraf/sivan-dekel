
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
        <div className="flex flex-col gap-10 items-stretch mb-12">
          {/* Text content - full width */}
          <div className={`w-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="greek-card text-right hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Title with icon - positioned inline with the first paragraph */}
              <div className="mb-4">
                <div className="flex justify-end items-start gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex justify-end items-center gap-3 mb-2">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading" style={{
                        background: 'linear-gradient(135deg, #0D5EAF, #30D5C8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        איך הכל התחיל
                      </h2>
                      <Book className="h-8 w-8 text-greek-gold animate-bounce" style={{ animationDuration: '3s' }} />
                    </div>
                    <p className="text-lg text-gray-700">
                      הכול התחיל מצלילי הבוזוקי והבגלמה, בגיל עשר האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית, כך נולדה לה המחברת היוונית הראשונה שלי.
                    </p>
                  </div>
                </div>
                
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

        {/* Greek atmosphere gallery - moved from Hero */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
          <div className="relative group">
            <img
              src="/lovable-uploads/98c608f6-6515-4d0c-b328-24a74bd94f92.png"
              alt="Greek island luxury view"
              className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
            />
            <div className="absolute inset-0 bg-greek-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium text-greek-blue">הים היווני הקסום</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/lovable-uploads/b41335ae-78bf-49a1-a23f-688fdbeabb5e.png"
              alt="Greek market street"
              className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
            />
            <div className="absolute inset-0 bg-greek-turquoise/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium text-greek-blue">שווקים מקומיים אותנטיים</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/lovable-uploads/61fe26f2-2f4e-4689-ab54-55c82964ceba.png"
              alt="Greek traditional dance"
              className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
            />
            <div className="absolute inset-0 bg-greek-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium text-greek-blue">מסורת הריקוד היוונית</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
