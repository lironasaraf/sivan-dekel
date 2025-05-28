import { Book } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import './App.css'; // הוספת CSS חיצוני

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
      className={`story-section ${isVisible ? 'animate-fade-in' : ''}`}
    >
      <div className="container">
        <div className="story-content">
          {/* טקסט מימין */}
          <div className="story-text">
            <div className="story-title">
              <Book className="story-icon" />
              <h2>איך הכל התחיל</h2>
            </div>
            <p>הכול התחיל מצלילי הבוזוקי והבגלמה, בגיל עשר האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית, כך נולדה לה המחברת היוונית הראשונה שלי.</p>
            <p>כשגדלתי טיילתי ביוון, התאהבתי בפשטות, בקסם, באווירה השמחה והנעימה, ובעיקר באנשים ובשפה.</p>
            <p>לאחר הלימודים האקדמיים החלטתי להתגורר באתונה, לספוג את האווירה מזווית נוספת, מקומית יותר.</p>
            <p>כשהתחלתי להבין יוונית ולשוחח עימם, הקסם קרה. ידיעת השפה יצרה אינטימיות, קרבה וחיבור עם מקומיים והחוויה שלי ביוון הפכה לתוססת, קסומה ומעניינת הרבה יותר.</p>
            <p>הבנתי שהדבר האמיתי שאני רוצה לעשות זה להעביר את התחושה הזו הלאה.</p>
            <p>ליצור מרחב קהילתי מאחד וחם שבו אנשים ילמדו יוונית, ויתאהבו בה – דרך צחוק, אוכל, שירים ותרבות.</p>
            <p>היום, אחרי מאות תלמידים, שיקמתי את הביטחון העצמי של רבים, הוכחתי לאנשים שהם יצליחו לדבר והשפה היוונית לא כל כך קשה כפי שנוטים לחשוב.</p>
          </div>

          {/* תמונות משמאל */}
          <div className="story-images">
            <img src="/lovable-uploads/a95fe90e-bd28-4369-b00e-70a146035845.png" alt="ילדה קטנה" />
            <img src="/lovable-uploads/c419b7e9-9d7f-4454-bdad-e0801fb83bb1.png" alt="אישה באי יווני" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
