
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
      className={`py-16 md:py-24 bg-gray-50 ${isVisible ? 'animate-fade-in' : ''}`}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
          {/* טקסט מימין */}
          <div className="w-full md:w-2/3 text-right">
            <div className="flex flex-row-reverse items-center gap-3 mb-6">
              <Book className="h-8 w-8 text-greek-gold" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading" style={{
                background: 'linear-gradient(135deg, #0D5EAF, #30D5C8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                איך הכל התחיל
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">הכול התחיל מצלילי הבוזוקי והבגלמה, בגיל עשר האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית, כך נולדה לה המחברת היוונית הראשונה שלי.</p>
            <p className="text-lg text-gray-700 mb-4">כשגדלתי טיילתי ביוון, התאהבתי בפשטות, בקסם, באווירה השמחה והנעימה, ובעיקר באנשים ובשפה.</p>
            <p className="text-lg text-gray-700 mb-4">לאחר הלימודים האקדמיים החלטתי להתגורר באתונה, לספוג את האווירה מזווית נוספת, מקומית יותר.</p>
            <p className="text-lg text-gray-700 mb-4">כשהתחלתי להבין יוונית ולשוחח עימם, הקסם קרה. ידיעת השפה יצרה אינטימיות, קרבה וחיבור עם מקומיים והחוויה שלי ביוון הפכה לתוססת, קסומה ומעניינת הרבה יותר.</p>
            <p className="text-lg text-gray-700 mb-4">הבנתי שהדבר האמיתי שאני רוצה לעשות זה להעביר את התחושה הזו הלאה.</p>
            <p className="text-lg text-gray-700 mb-4">ליצור מרחב קהילתי מאחד וחם שבו אנשים ילמדו יוונית, ויתאהבו בה – דרך צחוק, אוכל, שירים ותרבות.</p>
            <p className="text-lg text-gray-700">היום, אחרי מאות תלמידים, שיקמתי את הביטחון העצמי של רבים, הוכחתי לאנשים שהם יצליחו לדבר והשפה היוונית לא כל כך קשה כפי שנוטים לחשוב.</p>
          </div>

          {/* תמונות משמאל */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col gap-4">
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
      </div>
    </section>
  );
};

export default StorySection;
