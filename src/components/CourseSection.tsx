
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseSection = () => {
  const courseContent = [
    {
      level: "קורס א' - למתחילים",
      topics: [
        "אותיות ודקדוק בסיסי",
        "ברכות והיכרויות",
        "מספרים ושיחות פשוטות",
        "זמנים, ימי השבוע וחודשים",
        "שיחות יומיומיות",
      ]
    },
    {
      level: "קורס ב' - למתקדמים",
      topics: [
        "דקדוק מתקדם",
        "קריאה והבנה של טקסטים",
        "שיחות מורכבות",
        "תרבות ומנהגים יווניים",
        "ניבים ומטבעות לשון",
      ]
    }
  ];

  return (
    <section id="course" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">תכני הקורס</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            תכנית הלימודים שלי מקיפה את כל ההיבטים של השפה היוונית, החל מרמת המתחילים ועד לרמת שיחה שוטפת
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courseContent.map((course, index) => (
            <Card key={index} className="border-greek-sand shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-right">
                <h3 className="text-xl font-serif font-bold text-greek-blue mb-4 border-b border-greek-sand pb-2">
                  {course.level}
                </h3>
                <ul className="space-y-3">
                  {course.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center justify-end">
                      <span>{topic}</span>
                      <ArrowLeft className="mr-2 h-4 w-4 text-greek-gold" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700 mb-4">
            כל הקורסים כוללים חומרי לימוד, תרגילים ותמיכה שוטפת לאורך כל תקופת הלימודים
          </p>
          <Button className="greek-button mt-2">
            <span>לפרטים נוספים</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
