
import { Computer, BookOpen, Users, Monitor, Trophy, FileText, Headphones, MessageCircle, GraduationCap } from 'lucide-react';
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

  const learningProgression = [
    "הרכבת משפטים",
    "צבירת אוצר מילים לפי נושאים",
    "לימוד בשיטת האסוציאציות",
    "הבנה של תבניות לשוניות",
    "בניית ביטחון בשיחה",
    "הגעה לשיח חופשי ונעים, גם מול דוברי יוונית"
  ];

  return (
    <section 
      id="teaching-method" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-greek-turquoise/10 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            שיטת הלימוד שלי
          </h2>
        </div>

        {/* Main content - similar to AboutSection layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -left-4 -bottom-4 w-full h-full border-2 border-greek-turquoise rounded-lg"></div>
              <img
                src="/lovable-uploads/6e1826c1-0392-4b1c-b4a5-94109ff0ef44.png"
                alt="מחשב נייד עם קפה ופרחים - סביבת לימוד נעימה"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 text-right">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-heading text-greek-blue">הגישה שלי</h3>
              <Computer className="h-6 w-6 text-greek-gold" />
            </div>
            
            <p className="text-lg md:text-xl text-greek-turquoise font-medium mb-6">
              מודל לימוד ייחודי ומותאם במיוחד לישראלים
            </p>
            
            <div className="space-y-6 text-right">
              <p className="text-lg text-gray-700 leading-relaxed">
                השיטה שלי הדרגתית מאוד, מתבססת על סדר, דיוק והנחיה מובנית.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                אני מאמינה בלמידה שמתבצעת צעד אחר צעד – <span className="font-semibold text-greek-blue">σιγά σιγά</span> – לאט ובביטחון, עם הנאה לכל אורך הדרך.
              </p>
              
              {/* הלימוד הינו מתודי */}
              <div className="border-t border-greek-blue/20 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-5 w-5 text-greek-gold" />
                  <h4 className="text-xl font-semibold text-greek-blue">הלימוד הינו מתודי והוא משלב בין</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* רצף לימודי */}
                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-greek-blue">רצף לימודי ברור ומובנה</h5>
                    <div className="space-y-2 text-gray-700">
                      <p>לפני כל שיעור תקבלו דפי הכנה שיעזרו לכם להגיע מוכנים ולהרגיש בטוחים.</p>
                      <p>כל נושא נבנה על הקודם – בצורה הדרגתית, פשוטה וחווייתית.</p>
                    </div>
                  </div>
                  
                  {/* חוויית למידה */}
                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-greek-blue">חוויית למידה חיה ותוססת</h5>
                    <div className="text-gray-700">
                      <p>בכל שיעור יהיו משחקים קצרים, תחרויות משעשעות, דיאלוגים מצחיקים, סימולציות מחיי היום־יום ושירים יווניים מתורגמים.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* הלמידה מתחילה מהבסיס */}
              <div className="border-t border-greek-blue/20 pt-6">
                <h5 className="text-lg font-semibold text-greek-blue mb-4">
                  הלמידה מתחילה מהבסיס ומטפסת באופן טבעי
                </h5>
                <p className="text-gray-700 mb-4">
                  האלפבית, הברות פשוטות, מילים שימושיות ← ומטפסת באופן טבעי אל:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {learningProgression.map((step, index) => (
                    <div key={index} className="flex items-center gap-3 text-right">
                      <div className="w-2 h-2 bg-greek-turquoise rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-lesson preparation */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <div className="greek-card max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-4">
              <h3 className="text-2xl font-heading text-greek-blue">הכנה לפני השיעור</h3>
              <BookOpen className="h-6 w-6 text-greek-gold" />
            </div>
            <p className="text-center text-lg text-gray-700">
              לפני כל שיעור תקבלו דפי הכנה, וקישור לאפליקציית לימוד מילים ודקדוק
            </p>
          </div>
        </div>

        {/* Lesson Structure */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-greek-blue mb-2">מבנה השיעור - שלושה חלקים</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lessonStructure.map((part, index) => {
              const IconComponent = part.icon;
              return (
                <div key={index} className={`greek-card text-center transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-greek-gold/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-greek-gold" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-greek-blue mb-3">{part.title}</h4>
                  <p className="text-gray-700">{part.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Post-lesson materials */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-greek-blue mb-2">לאחר כל שיעור תקבלו</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postLessonMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <div key={index} className={`greek-card text-center transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1000 + index * 100}ms` }}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-greek-turquoise/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-greek-turquoise" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-greek-blue">{material.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal support */}
        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
          <div className="greek-card max-w-3xl mx-auto bg-gradient-to-r from-greek-blue/5 to-greek-turquoise/5">
            <div className="flex justify-center items-center gap-3 mb-4">
              <h3 className="text-2xl font-heading text-greek-blue">ליווי אישי</h3>
              <MessageCircle className="h-6 w-6 text-greek-gold animate-pulse" />
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
