
import { CheckCircle } from 'lucide-react';

const OfferSection = () => {
  const offerings = [
    {
      title: "קורסים אונליין",
      description: "קורסי זום אינטראקטיביים לכל הרמות, עם גמישות בבחירת שעות הלימוד",
    },
    {
      title: "שיעורים פרונטליים",
      description: "שיעורים פנים אל פנים לאלו המעדיפים אינטראקציה אישית ישירה",
    },
    {
      title: "שיעורים פרטיים",
      description: "הוראה אישית מותאמת בדיוק לצרכים ולקצב הלמידה שלך",
    },
    {
      title: "ייעוץ לטיול באתונה",
      description: "הכנה מושלמת לטיול ביוון, כולל טיפים מקומיים והמלצות על מקומות מיוחדים",
    },
    {
      title: "סדנאות לימוד יוונית",
      description: "סדנאות מרוכזות לקבוצות קטנות עם התמקדות בנושאים ספציפיים",
    },
    {
      title: "ספר לימוד ייחודי",
      description: "ספר לימוד מקיף שפיתחתי במיוחד עבור דוברי עברית",
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
          {offerings.map((offering, index) => (
            <div key={index} className="greek-card text-right">
              <div className="flex justify-end items-center gap-2 mb-3">
                <h3 className="text-xl font-serif text-greek-blue">{offering.title}</h3>
                <CheckCircle className="h-5 w-5 text-greek-gold flex-shrink-0" />
              </div>
              <p className="text-gray-700">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
