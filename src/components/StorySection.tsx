
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
      className={`py-16 bg-gray-50 ${isVisible ? 'animate-fade-in' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row gap-4 md:gap-6">
          {/* תמונות משמאל */}
          <div className={`w-1/3 order-2 lg:order-1 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute -left-2 -bottom-2 w-full h-full border-2 border-greek-blue rounded-lg"></div>
                <img 
                  src="/lovable-uploads/a95fe90e-bd28-4369-b00e-70a146035845.png" 
                  alt="ילדה קטנה"
                  className="w-full max-w-xs rounded-lg shadow-lg"
                />
              </div>
              <img 
                src="/lovable-uploads/c419b7e9-9d7f-4454-bdad-e0801fb83bb1.png" 
                alt="אישה באי יווני"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* כותרת וטקסט מימין */}
          <div className={`w-2/3 order-1 lg:order-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="greek-card h-full">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <h2 className="text-xl md:text-2xl font-heading text-greek-blue">איך הכל התחיל</h2>
                <Book className="h-6 w-6 text-greek-gold" />
              </div>
              
              <div className="space-y-4 text-right" dir="rtl">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">הכול התחיל מצלילי הבוזוקי והבגלמה, מגיל קטן האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית, כך נולדה לה המחברת היוונית הראשונה שלי.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">כשגדלתי טיילתי ביוון, התאהבתי בפשטות, בקסם, באווירה השמחה והנעימה, ובעיקר באנשים ובשפה.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">לאחר הלימודים האקדמיים החלטתי להתגורר באתונה, לספוג את האווירה מזווית נוספת, מקומית יותר.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">כשהתחלתי להבין יוונית ולשוחח עימם, הקסם קרה. ידיעת השפה יצרה אינטימיות, קרבה וחיבור עם מקומיים והחוויה שלי ביוון הפכה לתוססת, קסומה ומעניינת הרבה יותר.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">הבנתי שהדבר האמיתי שאני רוצה לעשות זה להעביר את התחושה הזו הלאה.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">ליצור מרחב קהילתי מאחד וחם שבו אנשים ילמדו יוונית, ויתאהבו בה – דרך צחוק, אוכל, שירים ותרבות.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">ואכן, הקסם קרה. אנשים הגיעו אלי מפה לאוזן, ונוצרו להן קהילות לימודיות אינטימיות המשלבות לימוד מקצועי, חברויות חדשות ובעיקר כיף אמיתי.</p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">היום, אחרי מאות תלמידים, שיקמתי את הביטחון העצמי של רבים, הוכחתי לאנשים שהם יצליחו לדבר ושהשפה היוונית לא כל כך קשה כפי שנוטים לחשוב.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
