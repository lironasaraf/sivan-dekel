
import { Book } from 'lucide-react';
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
      className={`py-16 bg-gray-50 direction-rtl ${isVisible ? 'animate-fade-in' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
          
          {/* טקסט מימין */}
          <div className="flex-2 text-right">
            <div className="flex flex-row-reverse items-center gap-3 mb-6">
              <Book className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-greek-blue to-greek-turquoise bg-clip-text text-transparent">
                איך הכל התחיל
              </h2>
            </div>
            
            <p className="mb-4 text-lg text-gray-700">
              הכול התחיל מצלילי הבוזוקי והבגלמה, בגיל עשר האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית, כך נולדה לה המחברת היוונית הראשונה שלי.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              כשגדלתי טיילתי ביוון, התאהבתי בפשטות, בקסם, באווירה השמחה והנעימה, ובעיקר באנשים ובשפה.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              לאחר הלימודים האקדמיים החלטתי להתגורר באתונה, לספוג את האווירה מזווית נוספת, מקומית יותר.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              כשהתחלתי להבין יוונית ולשוחח עימם, הקסם קרה. ידיעת השפה יצרה אינטימיות, קרבה וחיבור עם מקומיים והחוויה שלי ביוון הפכה לתוססת, קסומה ומעניינת הרבה יותר.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              הבנתי שהדבר האמיתי שאני רוצה לעשות זה להעביר את התחושה הזו הלאה.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              ליצור מרחב קהילתי מאחד וחם שבו אנשים ילמדו יוונית, ויתאהבו בה – דרך צחוק, אוכל, שירים ותרבות.
            </p>
            <p className="text-lg text-gray-700">
              היום, אחרי מאות תלמידים, שיקמתי את הביטחון העצמי של רבים, הוכחתי לאנשים שהם יצליחו לדבר והשפה היוונית לא כל כך קשה כפי שנוטים לחשוב.
            </p>
          </div>

          {/* תמונות משמאל */}
          <div className="flex-1 flex flex-col gap-4">
            <img 
              src="/lovable-uploads/a95fe90e-bd28-4369-b00e-70a146035845.png" 
              alt="ילדה קטנה" 
              className="w-full max-w-64 h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/lovable-uploads/c419b7e9-9d7f-4454-bdad-e0801fb83bb1.png" 
              alt="אישה באי יווני" 
              className="w-full max-w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
