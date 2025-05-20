
import { Book, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BookSection = () => {
  const benefits = [
    "שיטה ייחודית המותאמת במיוחד לדוברי עברית",
    "טבלאות דקדוק שמבהירות את ההקבלה בין עברית ליוונית",
    "אוצר מילים רלוונטי לישראלים המטיילים ביוון",
    "תרגילים פרקטיים הרלוונטיים לחיי היומיום",
    "הסברים בעברית שמקלים על תהליך הלמידה",
  ];

  return (
    <section id="book" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-greek-sand">
              <div className="flex justify-end items-center gap-3 mb-6">
                <h3 className="text-2xl font-serif text-greek-blue">היתרונות בלימוד עם מורה ישראלית</h3>
                <Book className="h-6 w-6 text-greek-gold" />
              </div>
              
              <ul className="space-y-4 text-right">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-end">
                    <span className="text-gray-700">{benefit}</span>
                    <CheckCircle className="ml-3 h-5 w-5 text-greek-turquoise flex-shrink-0" />
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <Button className="greek-button">
                  לרכישת הספר
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
