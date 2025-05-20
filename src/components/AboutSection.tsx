
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
                src="/lovable-uploads/560284be-ae16-4061-96a4-7798d4423da5.png"
                alt="Teacher portrait"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 text-right">
            <h2 className="section-heading">מי אני</h2>
            <p className="text-lg text-gray-700 mb-6">
              שלום, אני [שם המורה] - מורה ליוונית עם ניסיון של שנים בהוראת השפה. בוגרת לימודי יוונית באוניברסיטת אתונה, מתמחה בהוראת יוונית כשפה זרה.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              אני מתמחה בהתאמת שיטות הלימוד לדוברי עברית, עם הבנה עמוקה של הקשיים הייחודיים שישראלים עשויים להתמודד איתם בלמידת השפה היוונית.
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
