
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CourseSection = () => {
  const courseAContent = [
    "קריאה, הגייה נכונה",
    "לימוד מגדרים (זכר, נקבה, ניטרלי)",
    "שימוש בפעלים הכרחיים",
    "שימוש במילות קישור בסיסיות",
    "הרכבת משפטים בזמן הווה וביחיד",
    "שימוש בשמות תואר ושמות פעולה בסיסיים",
    "צבירת אוצר מילים לפי נושאים",
    "דיאלוג בשוק, שופינג, חופשות וטיולים",
    "דיאלוג בטברנה ועוד"
  ];

  const courseBContent = [
    "קריאת טקסטים",
    "ניהול דיאלוגים מורכבים יותר",
    "לימוד צורת רבים",
    "שימוש בפעלים נוספים ובמילות קישור חדשות",
    "לימוד זמן עבר ועתיד פשוטים ושילובם במשפטים",
    "לימוד צורת שייכות",
    "צורת ציווי",
    "צורות השוואה",
    "הרחבת אוצר המילים"
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

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="w-full lg:w-1/3">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/794be679-1549-4b33-b3f6-b27e093397c9.png"
                alt="Online Greek learning"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-greek-blue/30 to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-2 rounded-lg">
                <p className="text-sm font-medium text-greek-blue">לימוד יוונית אונליין</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg border border-greek-sand overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-greek-sand/20">
                    <TableHead className="text-right font-bold text-greek-blue text-lg p-6">קורס ב' - הטמעה וחיזוק ידע קיים</TableHead>
                    <TableHead className="text-right font-bold text-greek-blue text-lg p-6">קורס א' - לימוד היסודות, רכישת בסיס חזק</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="align-top p-6">
                      <ul className="space-y-2 text-right">
                        {courseBContent.map((item, index) => (
                          <li key={index} className="flex items-center justify-end text-gray-700">
                            <span>{item}</span>
                            <ArrowLeft className="mr-2 h-4 w-4 text-greek-gold flex-shrink-0" />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="align-top p-6">
                      <ul className="space-y-2 text-right">
                        {courseAContent.map((item, index) => (
                          <li key={index} className="flex items-center justify-end text-gray-700">
                            <span>{item}</span>
                            <ArrowLeft className="mr-2 h-4 w-4 text-greek-gold flex-shrink-0" />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        
        <div className="text-center">
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
