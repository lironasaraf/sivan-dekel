
import { CheckCircle, Clock, Users, MapPin, BookOpen, Video, Calendar } from 'lucide-react';

const OfferSection = () => {
  const offerings = [
    {
      title: "קורסים אונליין",
      description: "קורסי זום אינטראקטיביים לכל הרמות, עם גמישות בבחירת שעות הלימוד",
      icon: Video,
      details: [
        "שיעורים פרטיים או קבוצתיים",
        "חומרי לימוד דיגיטליים",
        "הקלטות השיעורים לחזרה",
        "תרגילים אינטראקטיביים"
      ]
    },
    {
      title: "שיעורים פרונטליים",
      description: "שיעורים פנים אל פנים לאלו המעדיפים אינטראקציה אישית ישירה",
      icon: Users,
      details: [
        "מפגשים במרכז הארץ",
        "אווירה חמה ואישית",
        "שיעורים במקום מותאם",
        "חומרים מודפסים כלולים"
      ]
    },
    {
      title: "שיעורים פרטיים",
      description: "הוראה אישית מותאמת בדיוק לצרכים ולקצב הלמידה שלך",
      icon: BookOpen,
      details: [
        "תכנית לימודים אישית",
        "התמקדות בנושאים שחשובים לך",
        "גמישות מלאה בזמנים",
        "התקדמות מותאמת אישית"
      ]
    },
    {
      title: "ייעוץ לטיול באתונה",
      description: "הכנה מושלמת לטיול ביוון, כולל טיפים מקומיים והמלצות על מקומות מיוחדים",
      icon: MapPin,
      details: [
        "ביטויים חיוניים לטיול",
        "המלצות על מסעדות ואטרקציות",
        "טיפים תרבותיים חשובים",
        "מדריך אישי מותאם למסלול שלך"
      ]
    },
    {
      title: "סדנאות לימוד יוונית",
      description: "סדנאות מרוכזות לקבוצות קטנות עם התמקדות בנושאים ספציפיים",
      icon: Calendar,
      details: [
        "סדנת שבת יום שלם (8 שעות)",
        "קבוצות של עד 6 משתתפים",
        "התמקדות בדיבור ושיחה",
        "כולל חומרי לימוד וארוחת צהריים",
        "נושאים: תרבות, היסטוריה, בישול יווני"
      ]
    },
    {
      title: "ספר לימוד ייחודי",
      description: "ספר לימוד מקיף שפיתחתי במיוחד עבור דוברי עברית",
      icon: BookOpen,
      details: [
        "מותאם למבנה השפה העברית",
        "דוגמאות מעולם הישראלי",
        "תרגילים מעשיים ומהנים",
        "כולל אודיו להגייה נכונה"
      ]
    },
  ];

  return (
    <section id="offer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-heading">מה אני מציעה</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            מגוון אפשרויות ללימוד השפה היוונית, מותאמות לצרכים והעדפות שונות
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div key={index} className="greek-card text-right group hover:shadow-xl transition-all duration-300">
                <div className="flex justify-end items-center gap-3 mb-4">
                  <h3 className="text-xl font-heading text-greek-blue font-semibold">{offering.title}</h3>
                  <div className="p-2 bg-greek-gold/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-greek-gold" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{offering.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-greek-blue mb-2">כולל:</h4>
                  {offering.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-greek-turquoise flex-shrink-0 mt-0.5" />
                      <span className="flex-1">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
