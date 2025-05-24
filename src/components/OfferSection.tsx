
import { CheckCircle, Clock, Users, MapPin, BookOpen, Video, Calendar, Plane } from 'lucide-react';

const OfferSection = () => {
  const offerings = [
    {
      title: "קורסים אונליין",
      description: "קורסי זום אינטראקטיביים לכל הרמות, עם גמישות בבחירת שעות הלימוד",
      icon: Video,
      image: "/lovable-uploads/98c608f6-6515-4d0c-b328-24a74bd94f92.png",
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
      image: "/lovable-uploads/b41335ae-78bf-49a1-a23f-688fdbeabb5e.png",
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
      image: "/lovable-uploads/6dda7237-8549-4057-8965-278c79c1f1.png",
      details: [
        "תכנית לימודים אישית",
        "התמקדות בנושאים שחשובים לך",
        "גמישות מלאה בזמנים",
        "התקדמות מותאמת אישית"
      ]
    },
    {
      title: "חבילת ייעוץ לאתונה",
      description: "הכנה מושלמת לטיול באתונה עם ייעוץ מקצועי ומותאם אישית",
      icon: Plane,
      image: "/lovable-uploads/5dce7c4a-a42e-4c3a-bc23-f76c2f6ef3c2.png",
      price: "250 ₪",
      details: [
        "שיחת ייעוץ להבנת הצורך ולבניית טיול מותאם",
        "המלצות למקומות: חופים, מסעדות פשוטות ויוקרתיות",
        "המלצות לטברנות ליום וללילה, מועדונים, ברים",
        "המלצות למוזאונים, גלריות וסיורי אוכל",
        "סגירת מקומות לטברנות ולהופעות"
      ]
    },
    {
      title: "סדנאות לימוד יוונית",
      description: "סדנאות מרוכזות לקבוצות קטנות עם התמקדות בנושאים ספציפיים",
      icon: Calendar,
      image: "/lovable-uploads/61fe26f2-2f4e-4689-ab54-55c82964ceba.png",
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
      image: "/lovable-uploads/c34f5b5e-8f82-4d71-a1b6-6f802c975fb5.png",
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
              <div key={index} className="greek-card text-right group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {offering.image && (
                  <div className="relative mb-4 -mx-6 -mt-6">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
                
                <div className="flex justify-end items-center gap-3 mb-4">
                  <h3 className="text-xl font-heading text-greek-blue font-semibold">{offering.title}</h3>
                  <div className="p-2 bg-greek-gold/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-greek-gold" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{offering.description}</p>
                
                {offering.price && (
                  <div className="text-center mb-4">
                    <span className="text-xl font-bold text-greek-blue">{offering.price}</span>
                  </div>
                )}
                
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
