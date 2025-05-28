
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
        }
      },
      { threshold: 0.15, rootMargin: '50px' }
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
      className="py-8 md:py-12 bg-gradient-to-br from-greek-turquoise/10 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h2 className={`section-heading transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            שיטת הלימוד שלי
          </h2>
        </div>

        <div className="flex flex-row gap-4 md:gap-6 mb-8">
          {/* Computer Image - Smaller */}
          <div className={`w-1/3 order-2 lg:order-1 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -left-2 -bottom-2 w-full h-full border-2 border-greek-blue rounded-lg"></div>
              <img
                src="/lovable-uploads/6e1826c1-0392-4b1c-b4a5-94109ff0ef44.png"
                alt="מחשב נייד עם קפה ופרחים - סביבת לימוד נעימה"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Method Description - Compact */}
          <div className={`w-2/3 order-1 lg:order-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="greek-card h-full">
              <div className="flex items-center gap-2 md:gap-3 mb-3">
                <h3 className="text-lg md:text-xl font-heading text-greek-blue">הגישה שלי</h3>
                <Computer className="h-6 w-6 text-greek-gold" />
              </div>
              
              <p className="text-sm md:text-base text-greek-turquoise font-medium mb-3">
                מודל לימוד ייחודי ומותאם במיוחד לישראלים
              </p>
              
              <div className="space-y-3 text-right">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  השיטה שלי הדרגתית מאוד, מתבססת על סדר ודיוק, משלבת בין דידקטיות הכרחית ללימוד חווייתי הכולל משחקים, תחרויות ודיאלוגים תוססים.
                </p>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-greek-blue">מתחילים מן הבסיס, וסי גה סיגה מטפסים מעלה.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-lesson preparation - Compact */}
        <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <div className="greek-card max-w-3xl mx-auto py-3">
            <div className="flex justify-center items-center gap-3 mb-2">
              <h3 className="text-lg font-heading text-greek-blue">הכנה לפני השיעור</h3>
              <BookOpen className="h-6 w-6 text-greek-gold" />
            </div>
            <p className="text-center text-gray-700">
              לפני כל שיעור תקבלו דפי הכנה, וקישור לאפליקציית לימוד מילים ודקדוק
            </p>
          </div>
        </div>

        {/* Lesson Structure - Compact */}
        <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <div className="text-center mb-4">
            <h3 className="text-lg font-heading text-greek-blue mb-2">מבנה השיעור - שלושה חלקים</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {lessonStructure.map((part, index) => {
              const IconComponent = part.icon;
              return (
                <div key={index} className={`greek-card text-center py-3 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-greek-gold/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-greek-gold" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-greek-blue mb-2">{part.title}</h4>
                  <p className="text-sm text-gray-700">{part.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Post-lesson materials - Compact */}
        <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center mb-4">
            <h3 className="text-lg font-heading text-greek-blue mb-2">לאחר כל שיעור תקבלו</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {postLessonMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <div key={index} className={`greek-card text-center py-3 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${900 + index * 100}ms` }}>
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-greek-turquoise/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-greek-turquoise" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-greek-blue">{material.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal support - Compact */}
        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="greek-card max-w-2xl mx-auto bg-gradient-to-r from-greek-blue/5 to-greek-turquoise/5 py-3">
            <div className="flex justify-center items-center gap-3 mb-2">
              <h3 className="text-lg font-heading text-greek-blue">ליווי אישי</h3>
              <MessageCircle className="h-6 w-6 text-greek-gold animate-pulse" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              זמינות מלאה וליווי אישי בין השיעורים לשאלות, דיוקים וחידודים
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodSection;
