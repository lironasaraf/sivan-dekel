
import { Clock, Users, Heart, Star, Coffee, Music, Calendar, CheckCircle, MapPin, CreditCard } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const GreekLivingRoomSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nextWorkshopDate, setNextWorkshopDate] = useState("לעדכון תאריך");
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

  const workshopFeatures = [
    "מינגלינג: הזדמנות להיחשף ולהכיר אנשים חדשים אשר רכשו דירות, בתי מלון ועסקים ביוון ובקפריסין",
    "ארוחה יוונית ביתית: בעלי ואני מכינים לכם ארוחה יוונית אותנטית",
    "תרבות ומוסיקה: מצגת מרתקת על התרבות היוונית והקשר לישראל",
    "לימוד השפה: לימוד של ביטויים שימושיים ודיבור יומיומי",
    "משחקי זיכרון, חידונים ודיאלוגים חיים",
    "קבצי סיכום ודפי תרגול לקחת הביתה",
    "מתנה קטנה מהלב – הפתעה יוונית מקורית לכל משתתף",
    "אין צורך בידע מוקדם – רק אהבה לשפה ולתרבות היוונית"
  ];

  const israeliTeacherBenefits = [
    "הסברים בשפה ובתרבות שלך",
    "הבנת הצורך וגישה מותאמת למנטליות הישראלית",
    "שילוב מחיי היום-יום, הומור והקשרים ישראליים",
    "ניתן לשאול בעברית כשנתקעים ולהוריד מחסומים"
  ];

  const personalBenefits = [
    "יחס אישי, נוכחות מלאה, והקשבה אמיתית",
    "חומרי לימוד מקוריים שיצרתי ופיתחתי במהלך השנים",
    "שיטת לימוד ייחודית שמבוססת על בנייה הדרגתית, יצירת בטחון עצמי בדיבור, למידה רב-חושית והנאה",
    "שילוב בין שפה, תרבות, חוויה, והומור",
    "זמינות וליווי צמודים לשאלות בין השיעורים",
    "טיפוח ושימור תלמידים קיימים, הנחות משמעותיות לממשיכים, בונוסים וערבי גיבוש"
  ];

  return (
    <section 
      id="greek-living-room" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-greek-sand/30 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            סדנת לימוד יוונית
          </h2>
          <p className={`text-xl text-gray-700 mt-4 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            רוצים לטעום מהשפה היוונית בצורה קלילה, חווייתית ומרתקת?
          </p>
          <p className={`text-lg text-gray-700 mt-2 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            רוצים להכיר חברים חדשים מקהילת אוהבי היוונית ולומדי השפה?
          </p>
          <p className={`text-lg text-gray-700 mt-2 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            בא לכם בילוי ייחודי המשלב תרבות, מוסיקה, אוכל ולמידה?
          </p>
          <p className={`text-lg text-gray-700 mt-4 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
            מידי חודש מתקיימת סדנת למידה פרונטלית, המזמינה אתכם לערב יווני ביתי, אותנטי המשלב אוכל טוב, מוסיקה תרבות ושפה.
          </p>
        </div>

        {/* Workshop Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Images Gallery */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="/lovable-uploads/e66f60b4-8227-45f1-b51b-575bea406093.png"
                  alt="דגלי יוון על שולחן מעוצב"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/e77a22f9-e49d-4175-ba7d-dc10e7417314.png"
                  alt="אירוע יווני מעוצב באווירה חמה"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative md:col-span-2">
                <img
                  src="/lovable-uploads/acfa3580-1ca8-45fa-9a05-b29b90826838.png"
                  alt="מתנות ומוצרים יווניים מסורתיים"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Workshop Features */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="greek-card h-full">
              <div className="flex justify-center items-center gap-3 mb-6">
                <h3 className="text-2xl font-heading text-greek-blue">מה כוללת הסדנה</h3>
                <Coffee className="h-8 w-8 text-greek-gold" />
              </div>
              
              <div className="space-y-4 mb-6">
                {workshopFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-right">
                    <CheckCircle className="h-5 w-5 text-greek-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Duration and Price */}
              <div className="bg-greek-sand/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-5 w-5 text-greek-gold" />
                  <h4 className="font-semibold text-greek-blue">משך ומחיר</h4>
                </div>
                <p className="text-gray-700 text-right mb-1">
                  <span className="font-bold text-greek-blue">🕒 משך הסדנה: 4 שעות</span>
                </p>
                <p className="text-gray-700 text-right">
                  <span className="font-bold text-greek-blue">עלות: 200 ש"ח למשתתף</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
          <div className="greek-card max-w-2xl mx-auto text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <h3 className="text-2xl font-heading text-greek-blue">ימים ושעות פעילות</h3>
              <Clock className="h-8 w-8 text-greek-gold" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-greek-blue/5 p-4 rounded-lg">
                <Calendar className="h-6 w-6 text-greek-blue mx-auto mb-2" />
                <p className="font-semibold text-greek-blue mb-1">ימים א'-ה'</p>
                <p className="text-gray-700">09:00–20:00</p>
              </div>
              <div className="bg-greek-turquoise/5 p-4 rounded-lg">
                <Calendar className="h-6 w-6 text-greek-turquoise mx-auto mb-2" />
                <p className="font-semibold text-greek-turquoise mb-1">ימי שישי</p>
                <p className="text-gray-700">09:00–13:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Israeli Teacher Benefits */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
            <div className="greek-card h-full">
              <div className="flex justify-center items-center gap-3 mb-6">
                <h3 className="text-xl font-heading text-greek-blue">מה היתרונות בלימוד עם מורה ישראלית?</h3>
                <Star className="h-6 w-6 text-greek-gold" />
              </div>
              
              <div className="space-y-3">
                {israeliTeacherBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-right">
                    <CheckCircle className="h-4 w-4 text-greek-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Benefits */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.7s" }}>
            <div className="greek-card h-full">
              <div className="flex justify-center items-center gap-3 mb-6">
                <h3 className="text-xl font-heading text-greek-blue">מה היתרונות בלימוד איתי?</h3>
                <Users className="h-6 w-6 text-greek-gold" />
              </div>
              
              <div className="space-y-3">
                {personalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-right">
                    <CheckCircle className="h-4 w-4 text-greek-turquoise flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Landing Page Message */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
          <div className="greek-card max-w-3xl mx-auto bg-gradient-to-r from-greek-blue/5 to-greek-turquoise/5">
            <div className="flex justify-center items-center gap-3 mb-4">
              <h3 className="text-2xl font-heading text-greek-blue">חוויית קהילה</h3>
              <Music className="h-8 w-8 text-greek-gold animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              קבוצת הלימוד היא מרחב בטוח, תומך, נקי משיפוטיות ומעורר השראה. 
              כאן תוכלו ללמוד, לצחוק, להכיר חברים חדשים ולחוות את קסם התרבות היוונית באווירה חמה ומזמינה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreekLivingRoomSection;
