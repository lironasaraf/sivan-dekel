
import { Flag } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -left-4 -bottom-4 w-full h-full border-2 border-greek-turquoise rounded-lg"></div>
              <img
                src="/lovable-uploads/5afef61a-f8ea-4ac9-a454-741278acf65f.png"
                alt="Greek flag"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 text-right">
            <h2 className="section-heading">מי אני</h2>
            <p className="text-lg text-gray-700 mb-6">
              אני סיון דקל בצלאל, מורה ישראלית ליוונית, מרצה ומדריכת סדנאות לימוד השפה היוונית, שחיה ונושמת את התרבות היוונית כבר מעל לעשור ויוצרת חיבורים מרגשים בין ישראל ליוון.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              בעלת תואר ראשון בלימודי המזרח התיכון, תואר ראשון נוסף בפסיכולוגיה ותואר שני בדיפלומטיה ויחסים בין לאומיים.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              אני מלמדת יחידים וקבוצות, בזום ופרונטלי במתכונת של שיעורים פרטיים וקורסים קבוצתיים.
              האווירה בשיעורים שלי הינה חווייתית, חמה ועוטפת ואני מחברת בין תרבות, מוסיקה, שפה וסיפורים עכשוויים.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              לצד הקלילות והחוויה, אני מציבה דגש על יסודיות, דיוק וסדר. והמוטו שלי הוא שאין קיצורי דרך בלימוד שפה!
              אם אתם מחפשים לימוד כייפי, רציני והדרגתי, עם יחס אישי ועם המון סבלנות - הגעתם למקום הנכון.
            </p>
            <div className="flex items-center gap-3 justify-end text-greek-blue">
              <span className="font-medium text-lg">אני אוהבת את יוון</span>
              <Flag className="h-5 w-5 animate-wave" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
