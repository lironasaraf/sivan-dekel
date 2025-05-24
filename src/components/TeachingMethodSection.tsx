
import { Computer, BookOpen, Users, Monitor, Trophy, FileText, Headphones, MessageCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const TeachingMethodSection = () => {
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

  const lessonStructure = [
    {
      title: "מצגת לימוד עם חומר חדש",
      description: "כולם ישתתפו בהרכבת המשפטים, לפי תורות",
      icon: Monitor
    },
    {
      title: "חלוקה לקבוצות רנדומליות",
      description: "לניהול הדיאלוגים",
      icon: Users
    },
    {
      title: "תחרויות ומשחקים",
      description: "להגברת המוטיבציה, לחיזוק הקריאה ולהטמעת החומר הנלמד",
      icon: Trophy
    }
  ];

  const postLessonMaterials = [
    {
      title: "מצגת לימוד",
      icon: Monitor
    },
    {
      title: "שיעור מוקלט",
      icon: Headphones
    },
    {
      title: "שיעורי בית הכוללים תשובות",
      icon: FileText
    }
  ];

  return (
    <section 
      id="teaching-method" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-greek-turquoise/10 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            שיטת הלימוד שלי
          </h2>
          <p className={`text-xl text-gray-700 mt-4 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            מודל לימוד ייחודי ומותאם במיוחד לישראלים
          </p>
        </div>

        <div className="flex flex-row gap-4 md:gap-8 mb-16">
          {/* Computer Image */}
          <div className={`w-1/3 md:w-1/2 order-2 lg:order-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -left-2 md:-left-4 -bottom-2 md:-bottom-4 w-full h-full border-2 border-greek-blue rounded-lg"></div>
              <img
                src="/lovable-uploads/6e1826c1-0392-4b1c-b4a5-94109ff0ef44.png"
                alt="מחשב נייד עם קפה ופרחים - סביבת לימוד נעימה"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Method Description - Shortened */}
          <div className={`w-2/3 md:w-1/2 order-1 lg:order-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="greek-card h-full">
              <div className="flex justify-end items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-heading text-greek-blue">הגישה שלי</h3>
                <Computer className="h-6 w-6 md:h-8 md:w-8 text-greek-gold" />
              </div>
              
              <div className="space-y-3 md:space-y-4 text-right">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  השיטה שלי הדרגתית מאוד, מתבססת על סדר ודיוק, משלבת בין דידקטיות הכרחית ללימוד חווייתי הכולל משחקים, תחרויות ודיאלוגים תוססים.
                </p>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-greek-blue">מתחילים מן הבסיס, וסי גה סיגה מטפסים מעלה.</span>
                </p>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  בשיעורים הראשונים לומדים כיצד לקרוא ולהגות את המילים, לאחר מכן לומדים לזהות מגדרים, וצעד אחר צעד – לומדים להרכיב משפטים, לקרוא טקסטים ולנהל דיאלוגים.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-lesson preparation */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
          <div className="greek-card max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-6">
              <h3 className="text-2xl font-heading text-greek-blue">הכנה לפני השיעור</h3>
              <BookOpen className="h-8 w-8 text-greek-gold" />
            </div>
            <p className="text-center text-gray-700 text-lg">
              לפני כל שיעור תקבלו דפי הכנה, וקישור לאפליקציית לימוד מילים ודקדוק
            </p>
          </div>
        </div>

        {/* Lesson Structure */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-greek-blue mb-4">מבנה השיעור - שלושה חלקים</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonStructure.map((part, index) => {
              const IconComponent = part.icon;
              return (
                <div key={index} className="greek-card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-greek-gold/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-greek-gold" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-greek-blue mb-3">{part.title}</h4>
                  <p className="text-gray-700">{part.description}</p>
                  <div className="mt-4 text-3xl font-bold text-greek-turquoise">
                    {String.fromCharCode(1488 + index)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Post-lesson materials */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.7s" }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-greek-blue mb-4">לאחר כל שיעור תקבלו</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postLessonMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <div key={index} className="greek-card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-greek-turquoise/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-greek-turquoise" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-greek-blue">{material.title}</h4>
                  <div className="mt-4 text-3xl font-bold text-greek-gold">
                    {String.fromCharCode(1488 + index)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal support */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
          <div className="greek-card max-w-3xl mx-auto bg-gradient-to-r from-greek-blue/5 to-greek-turquoise/5">
            <div className="flex justify-center items-center gap-3 mb-4">
              <h3 className="text-2xl font-heading text-greek-blue">ליווי אישי</h3>
              <MessageCircle className="h-8 w-8 text-greek-gold animate-pulse" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              זמינות מלאה וליווי אישי בין השיעורים לשאלות, דיוקים וחידודים
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodSection;
