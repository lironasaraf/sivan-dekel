
import { Book } from 'lucide-react';

const StorySection = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">איך הכל התחיל</h2>
        </div>
        
        <div className="greek-card max-w-4xl mx-auto">
          <div className="text-right">
            <div className="flex justify-end items-center gap-3 mb-4">
              <h3 className="text-2xl font-serif text-greek-blue">הסיפור שלי עם יוון</h3>
              <Book className="h-6 w-6 text-greek-gold" />
            </div>
            
            <p className="text-lg text-gray-700 mb-4">
              הסיפור שלי עם יוון החל לפני שנים רבות כשביקרתי באתונה לראשונה. התאהבתי מיד בתרבות, באנשים ובשפה היוונית. החלטתי ללמוד את השפה באופן רציני.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
              לאחר מספר שנים של לימודים אינטנסיביים באוניברסיטת אתונה והתגוררות ביוון, הפכתי למורה ליוונית. הבנתי שיש חסר במורים דוברי עברית שיכולים להנגיש את השפה היוונית לישראלים בצורה יעילה ומותאמת.
            </p>
            
            <p className="text-lg text-gray-700">
              החלטתי לפתח שיטת לימוד ייחודית המותאמת במיוחד לדוברי עברית, תוך שימת דגש על הדמיון והשוני בין השפות, מה שהופך את תהליך הלמידה למהיר ואפקטיבי יותר עבור ישראלים.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
