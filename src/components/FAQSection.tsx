
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "אם אני מפספס\\ת שיעור?",
      answer: [
        "השיעור מתקיים כל שבוע, ומחולק למועד בוקר (10:00) ומועד ערב (19:00) הכניסה אליו גמישה, בהתאם לפניות והזמינות שלכם באותו יום.",
        "כל השיעורים מוקלטים וניתן לחזור עליהם לאחר השיעור",
        "לאחר כל שיעור יש שיעור חזרה כשבוע לאחר מכן, מועד שיעור החזרה נקבע ע\"פ זמינות רוב התלמידים"
      ]
    },
    {
      question: "עד מתי החומרים זמינים לי בקישור הלימודי?",
      answer: ["עד שלושה חודשים מתום הקורס"]
    },
    {
      question: "אם יש לי רקע ביוונית, ואוצר מילים רחב, אני צריך להירשם לקורס א' או ב'?",
      answer: ["גם למי שיש אוצר מילים נרחב, אך לא יודע לחבר אותו לכדי משפטים ולדבר, אני ממליצה להירשם לקורס א'"]
    },
    {
      question: "כמה אנשים יש בקבוצת הלימוד בקורס א' וב' בזום?",
      answer: ["עד 13 אנשים בשיעור"]
    },
    {
      question: "האם כדאי לי להירשם לקורס בזום או לקבוצת הלמידה הפרונטלית?",
      answer: ["מומלץ להירשם לקורס המובנה והמסודר בזום, ולחזק את הידע הנרכש ע\"י הגעה לקבוצת הלמידה הפרונטלית פעם בשבוע \\ בשבועיים"]
    },
    {
      question: "כמה אנשים יש בקבוצת הלמידה הפרונטלית?",
      answer: ["עד 10 תלמידים"]
    },
    {
      question: "מהי מדיניות הביטולים?",
      answer: [
        "ביטול לפני שהקורס מתחיל: החזר מלא למעט דמי הרישום : 250 ₪",
        "ביטול לאחר השתתפות בשיעור הראשון בקורס: החזר בגובה 50% מהתשלום",
        "ביטול לאחר השיעור השני ואילך: אין החזר כספי"
      ]
    },
    {
      question: "יש מענה לשאלות מעבר לשעות הלמידה בקורסים ובשיעורים הפרטיים?",
      answer: ["כן, בימי א'-ה' עד השעה 19:00 יש מענה לשאלות בוואצאפ"]
    },
    {
      question: "האם יש תרגול דיבור גם למי שמפחד\\ת לדבר?",
      answer: ["כן, התרגולים נבנים בהדרגה, מתוך תחושת ביטחון. אף אחד לא נזרק למים העמוקים מיד – המטרה היא לעודד, לא להלחיץ."]
    },
    {
      question: "אני חושש\\ת שלא אצליח לעמוד בקצב – מה עושים?",
      answer: ["יש הקלטות, דפי הכנה, תמיכה בוואצאפ, ושיעורי חזרה – כולם עוזרים לך להישאר בקצב שמתאים לך."]
    },
    {
      question: "איך נרשמים לחבילת הייעוץ לאתונה?",
      answer: ["דרך טופס ההרשמה או הודעה בוואצאפ. לאחר התשלום נשלח שאלון קצר, קובעים שיחת ייעוץ ומתחילים לבנות את המסלול."]
    },
    {
      question: "איך מקבלים את הספר?",
      answer: ["לאחר התשלום, הספר נשלח אליך עם שליח עד הבית תוך 7 ימי עסקים. משלוח כלול במחיר."]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">שאלות נפוצות</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <HelpCircle className="h-6 w-6 text-greek-gold" />
            <p className="text-lg text-gray-700">
              תשובות לשאלות הנפוצות ביותר שאני מקבלת מתלמידים
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                 <button
  onClick={() => toggleFAQ(index)}
  className="w-full p-6 text-right flex flex-row-reverse items-center justify-between hover:bg-gray-50 transition-colors"
>
  <h3 className="text-lg font-semibold text-greek-blue text-right">
    {faq.question}
  </h3>
  <div className="flex items-center gap-3">
    {openFAQ === index ? (
      <ChevronUp className="h-5 w-5 text-greek-blue" />
    ) : (
      <ChevronDown className="h-5 w-5 text-greek-blue" />
    )}
  </div>
</button>

                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4 space-y-3">
                        {faq.answer.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-gray-700 text-right leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
