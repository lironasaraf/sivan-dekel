
import { Book, CheckCircle, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BookSection = () => {
  const benefits = [
    "הקניית בסיס חזק לניהול דיאלוגים וקריאת טקסטים",
    "הסברים מפורטים",
    "הנגשת הדקדוק לתלמיד הישראלי",
    "אוצר מילים עשיר",
    "הרכבת משפטים ועוד",
  ];

  const handleBitPayment = () => {
    // This would typically redirect to a Bit payment page
    window.open('https://bit.ly/payment-link', '_blank');
  };

  return (
    <section id="book" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-greek-sand">
              <div className="flex justify-center items-center gap-3 mb-6">
                <h3 className="text-2xl font-serif text-greek-blue">ספר הלימוד שלי</h3>
                <Book className="h-6 w-6 text-greek-gold" />
              </div>
              
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-greek-blue mb-2">
                  לומדים יוונית צעד אחר צעד
                </h4>
                <p className="text-gray-700 mb-4">
                  ספר לימוד יסודות השפה היוונית המותאם לקורס א' וב'.
                </p>
              </div>

              <ul className="space-y-4 text-right mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-end">
                    <span className="text-gray-700">{benefit}</span>
                    <CheckCircle className="ml-3 h-5 w-5 text-greek-turquoise flex-shrink-0" />
                  </li>
                ))}
              </ul>

              <div className="text-center border-t border-greek-sand pt-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-greek-blue">350 ₪</span>
                  <span className="text-gray-600 mr-2">כולל משלוח</span>
                </div>
                <Button 
                  onClick={handleBitPayment}
                  className="greek-button w-full"
                >
                  <CreditCard className="ml-2 h-4 w-4" />
                  <span>רכישה באמצעות ביט</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 order-1 md:order-2 text-right">
            <h2 className="section-heading">ספר הלימוד שלי</h2>
            <p className="text-lg text-gray-700 mb-6">
              לאחר שנים של הוראת יוונית לישראלים, פיתחתי ספר לימוד ייחודי המותאם במיוחד לדוברי עברית. הספר מנצל את הדמיון בין השפות ונותן מענה לאתגרים הספציפיים שיש לישראלים בלימוד השפה היוונית.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              הספר כולל שיטת לימוד מובנית, אוצר מילים יומיומי, דקדוק מפורט, תרגילים פרקטיים ואפילו טיפים לתקשורת עם מקומיים בטיול ביוון.
            </p>
            <p className="text-lg font-medium text-greek-blue">
              השילוב של הספר יחד עם הקורסים שלי מספק את הדרך המהירה והיעילה ביותר ללמוד יוונית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
