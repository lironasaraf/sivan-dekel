import { ArrowLeft, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';

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

  const groupLearningAdvantages = [
    "תכנית לימודים סדורה, ברורה והדרגתית שמביאה תוצאות",
    "מפגשים קבועים שמייצרים מסגרת, התמדה ושגרה",
    "אינטראקציה קבוצתית – תרגול שיחה עם משתתפים אחרים",
    "טעויות של אחרים מנרמלות את הדרך – כשרואים שגם אחרים טועים, מבינים שזה חלק טבעי מהתהליך ומעיזים יותר",
    "אנרגיה קבוצתית שמגבירה מוטיבציה והנאה מהלמידה",
    "הקלטות מלאות לכל שיעור – אפשר לחזור על החומר בזמן שנוח",
    "דפי הכנה לפני כל שיעור + דפי תרגול בסיום",
    "קבוצת וואצאפ פעילה לשאלות, תרגולים, שיתוף והשראה",
    "חיסכון כספי ביחס לשיעורים פרטיים – תמורה גבוהה במחיר משתלם"
  ];

  return (
    <section id="course" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">קורסים קבוצתיים בזום</h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-700 mt-4 mb-6">
            <span>תכנית לימודים</span>
            <span className="text-greek-turquoise">✓</span>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            תכנית הלימודים שלי מקיפה את כל ההיבטים של השפה היוונית, החל מרמת המתחילים ועד לרמת שיחה שוטפת
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          <div className="w-full lg:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/794be679-1549-4b33-b3f6-b27e093397c9.png"
                alt="Online Greek learning"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6">
            {/* קורס מתחילים א' - צד ימין */}
            <div className="w-full md:w-1/2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-greek-blue mb-4 text-center">קורס מתחילים א'</h3>
                  <div className="space-y-3">
                    {courseAContent.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-right">
                        <ArrowLeft className="h-4 w-4 text-greek-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* קורס מתחילים ב' - צד שמאל */}
            <div className="w-full md:w-1/2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-greek-blue mb-4 text-center">קורס מתחילים ב'</h3>
                  <div className="space-y-3">
                    {courseBContent.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-left">
                        <ArrowLeft className="h-4 w-4 text-greek-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* יתרונות ללימוד קבוצתי בזום */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-greek-blue text-center mb-8">יתרונות ללימוד קבוצתי בזום</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {groupLearningAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 text-right">
                  <CheckCircle className="h-5 w-5 text-greek-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* המלצה מהמורה */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-greek-gold/10 to-greek-turquoise/10 border-greek-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <Star className="h-6 w-6 text-greek-gold fill-current" />
                  <h3 className="text-2xl font-bold text-greek-blue">המלצה מהמורה</h3>
                  <Star className="h-6 w-6 text-greek-gold fill-current" />
                </div>
                
                <h4 className="text-xl font-semibold text-greek-blue text-center mb-6">
                  קורס הדגל שלי – יוונית למתחילים א'
                </h4>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    "יוונית למתחילים א'" הוא קורס הדגל שלי, והוא נבנה בקפידה על בסיס שיטה שמביאה תוצאות אמיתיות: שיטה הדרגתית, מדויקת, ובעיקר – אנושית וחווייתית.
                  </p>
                  
                  <p>
                    בקורס הזה נתחיל ממש מהבסיס: האלפבית, הברות, מילים ראשונות, ונתקדם יחד בקצב נעים ובטוח להבנה של משפטים, דיאלוגים ושיחות פשוטות. כל שיעור יעניק לכם תחושת הצלחה, גם אם אף פעם לא למדתם שפה.
                  </p>
                  
                  <p>
                    הקורס כולל הסברים בעברית ברורה, קבצי תרגול, דפי הכנה לפני כל שיעור, גישה להקלטות, שיעור חזרה, וקבוצת וואצאפ תומכת.
                  </p>
                  
                  <p>
                    הייחוד של הקורס הוא השילוב בין לימוד מובנה לבין חוויה חברתית מהנה – תמצאו בו משחקים, תרגולים חיים, חידונים, וסימולציות מהחיים האמיתיים.
                  </p>
                  
                  <p>
                    אני ממליצה על הקורס הזה במיוחד לכל מי שרוצה להתחיל מ-א' ביוונית, לבנות בסיס חזק ולהרגיש בטוח לדבר.
                  </p>
                  
                  <p>
                    הוא מתאים גם למי שכבר מכיר מילים, אבל לא מצליח להרכיב משפטים או לנהל שיחה.
                  </p>
                  
                  <p>
                    הקורס מתאים לקהל הישראלי – עם דוגמאות, הומור, הסברים תרבותיים, וקצב שמאפשר הפנמה אמיתית.
                  </p>
                  
                  <p className="font-medium text-greek-blue">
                    אני מזמינה אתכם להצטרף למסע מרגש, שבו תלמדו לא רק שפה – אלא תפתחו דלת לעולם חדש של תרבות, מוזיקה, חום אנושי ואהבה ליוון
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            כל הקורסים כוללים חומרי לימוד, תרגילים ותמיכה שוטפת לאורך כל תקופת הלימודים
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <Button className="greek-button mt-2">
              <span>לפרטים נוספים</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
