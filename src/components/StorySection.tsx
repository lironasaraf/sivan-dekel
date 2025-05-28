
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
    <section id="story" ref={sectionRef} className={`story-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="story-content">
          {/* תמונות משמאל */}
          <div className="story-images">
            <img src="/lovable-uploads/a95fe90e-bd28-4369-b00e-70a146035845.png" alt="ילדה קטנה" />
            <img src="/lovable-uploads/c419b7e9-9d7f-4454-bdad-e0801fb83bb1.png" alt="אישה באי יווני" />
          </div>

          {/* טקסט מימין */}
          <div className="story-text">
            <div className="story-title-wrapper">
              <Book className="story-icon" />
              <h2 className="story-title">איך הכל התחיל</h2>
            </div>
            <p>הכול התחיל מצלילי הבוזוקי והבגלמה, בגיל עשר האזנתי למוסיקה היוונית וכתבתי מה ששמעתי בעברית...</p>
            <p>כשגדלתי טיילתי ביוון, התאהבתי בפשטות, בקסם, באווירה השמחה והנעימה, ובעיקר באנשים ובשפה...</p>
            <p>כשהתחלתי להבין יוונית ולשוחח עימם, הקסם קרה...</p>
            <p>ליצור מרחב קהילתי מאחד וחם שבו אנשים ילמדו יוונית, ויתאהבו בה...</p>
            <p>היום, אחרי מאות תלמידים, שיקמתי את הביטחון העצמי של רבים...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;