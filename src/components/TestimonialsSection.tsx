import { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const testimonials = [
    {
      name: "הילה ויש",
      text: "מורה מעולה! סיוון מלמדת בצורה סופר מקצועית, חוויתית ומעניינת. המלצה רותחת לכל מי שחושב ללמוד יוונית 👌🇬🇷",
      image: "/lovable-uploads/hila-vaish.png"
    },
    {
      name: "ערן קפלן",
      text: "גם אני עדיין לומד יוונית עם סיוון המדהימה שמעבירה את הקורס במקצועיות ועם השקעה יוצאת מגדר הרגיל כולל שיעורי תגבור וחזרה על החומר, סיוון שנותנת את כל כולה וזמינה לכל עיצה, הבהרה או בקשה. כל זאת אינו מובן מאליו ואני מנצל הזדמנות זו להודות לך מכל ליבי ולאחל לך חג חנוכה שמח",
      image: "/lovable-uploads/eran-kaplan.png"
    },
    {
      name: "סתיו עמק",
      text: "מקצועית ביותר, סבלנית ומשקיעה בכל שיעור. כזאת מורה לא תמצאו🥇",
      image: "/lovable-uploads/stav-emek.png"
    },
    {
      name: "אלינור פרוימוביץ'",
      text: "מעבר למורה סבלנית, מקצועית, מסורה ובאמת מחוברת לשפה היוונית…תמצאו אישה חמה, נעימה, אותנטית ועם רצון גדול שתצליחו! מי שמחליט להירשם פשוט זוכה👑",
      image: "/lovable-uploads/elinor-froimovich.png"
    },
    {
      name: "איריס פנטון",
      text: "סיוון דקל מורה מקסימה, מקצועית ונעימה לזוז איתה לכיוון היוונית, שעדיין נראית קשה אבל יש לה טיפים ודרכים יצירתיות להגיע ללימוד טוב יותר ובהנאה. ממליצה לכל מי שחולם ללמוד יוונית!",
      image: "/lovable-uploads/19cb92b5-51f8-4369-bedf-303197adffd8.png"
    },
    {
      name: "מיכל ליברמן",
      text: "המורה הכי טובה שהייתה לי!! אדיבה, מקצועית, סובלנית ויש לה שיטה מדהימה. ברגע שהתחלתי איתה, השפה הפכה לנוחה וכיפית. מעבר לזה שהיא מורה יוצאת מן הכלל, היא בן אדם עם לב זהב. ממליצה מכל הלב!",
      image: "/lovable-uploads/30381914-ca43-4f72-b190-7a8aaa2fbacc.png"
    },
    {
      name: "דביר קריספל",
      text: "סיוון זה הייתה התשובה לבקשתי ללמוד יוונית! אני בן 60 ולא תפסתי שפות בקלות, אבל בקורס של סיוון הכל הלך חלק, כיף וברור. היא מורה מעולה! יש לה יכולת להתאים את עצמה לכל אחד לפי הצרכים שלו.",
      image: "/lovable-uploads/247cdad4-00f6-436c-ba6b-a88d2bf534ea.png"
    },
    {
      name: "נועם כץ",
      text: "הקלטתי הרבה מידע במהלך הסדנה, נתנה הרבה כלים איך ללמוד את השפה, הרגשתי שהיא מאוד מתכוונת שהאנשים יצליחו וילמדו, לא מעבירה זמן. ממליצה מאוד!",
      image: "/lovable-uploads/10a2415d-ce35-40bd-b319-db09da4d6d53.png",
      rating: 5
    },
    {
      name: "נירה אביטן לויט",
      text: "השיעורים של סיוון הם פנינה! באה מלאת פחד מהשפה הקשה הזו, יותר סקרנות מרצון ללמוד. יצאתי עם יסודות מוצקים. סיוון מורה מדהימה! מקצועית, מותאמת, מקסימה, חמה, משעשעת. הרגשתי בטוחה. לא פחדתי לטעות.",
      image: "/lovable-uploads/eed3dd74-6bcb-461b-b889-168d7b2471a2.png",
      rating: 5
    },
    {
      name: "אביב אורנשטיין",
      text: "מורה מעולה ! מעבירה את החומר בצורה ברורה ועושה חזרות על החומר גם מעבר לשיעורים בקורס. בקיצור מומלצת מאוד.",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "שאול פלד",
      text: "סיוון מורה מעולה! האהבה שלה ליוונית (וליוון) נוכחת בכל שיעור ומעשירה אותו. למתחילים זו כניסה נהדרת לשפה, למתקדמים יותר קפיצת מדרגה מובטחת. מומלצת בחום.",
      image: "/lovable-uploads/7a94da55-2439-4941-8a61-5b68f230c84e.png",
      rating: 5
    },
    {
      name: "יהלי זהבי",
      text: "אין עליך מורה בחסד!!! השעה הכי טובה בשבוע שלי. אני כל כך נהנת מכל רגע בשיעורים ומהתמיכה והנכונות לעזור גם מעבר לשעות הלימוד. ❤️❤️❤️❤️❤️❤️❤️❤️",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "Shoshi Aizenberg Zimmerman",
      text: "ממליצה מאד על סיוון. שיטת הלימוד מובנת ויסודית. סיוון סובלנית , זמינה וקשובה לכל שאלה ובקשה.❣️",
      image: "/lovable-uploads/3e39d528-9df8-4751-a347-92f8c64a71e1.png",
      rating: 5
    },
    {
      name: "Sara Botnaro",
      text: "מורה נפלאה ,סבלנית,קשובה לתלמיד,רהוטה בהסבריה ותורמת הרבה מזמנה וממרצה ללימוד השפה היוונית.ממליצה בחום.",
      image: "/lovable-uploads/827b3968-8208-4596-a732-5dc3c190aaa1.png",
      rating: 5
    },
    {
      name: "Liron Varon",
      text: "מורה מספר 1! אני סוף סוף מאזין לשירים ומבין מה הם אומרים. זה משמח אותי ממש. כבר לא יכול לחכות לקורס מתקדם. תודה סיוון. שמח מאוד שהייתי תלמיד שלך.",
      image: "/lovable-uploads/811aeda8-6432-4998-964f-713808090333.png",
      rating: 5
    },
    {
      name: "Carmela Kirmaeir",
      text: "סיוון הינה מורה ליוונית בכל רמח אבריה, מקסימה עם הרבה סבלנות לנתינה מדהימה, בזכותה יש סיכוי שאלמד יוונית, תודה לך סיוון, אהובת אותך❤️",
      image: "/lovable-uploads/7cd94760-965d-42be-a85c-862a3da1692f.png",
      rating: 5
    },
    {
      name: "Alice Shasha",
      text: "מורה מספר 1 !!!! סופר מקצועית וסבלנית ממליצה בחום❤️❤️",
      image: "/lovable-uploads/f1a87727-a635-4d2a-8b6f-c2adf771f53c.png",
      rating: 5
    },
    {
  name: "Eydor Diamant",
  text: "סיוון מורה מעולה, סבלנית ותמיד עם חיוך. מאד מקפידה על בניית השפה מהיסודות כדי לא ללכת לאיבוד בהמשך. מאד ממליץ לכל מי שחושב ללמוד יוונית",
  image: "https://i.imgur.com/dLZfQs7.png",
  rating: 5
},
{
  name: "Merav Tal-Maon",
  text: "בדיוק סיימתי את הקורס למתחילים ואני יכולה להגיד שסיוון היא מורה מעולה! למדנו המון ובצורה מעניינת וחוויתית. סיוון משלבת מגוון דרכי למידה - שיעורים בזום, סרטונים, אפליקציה ללמוד מילים ועוד. מומלץ ביותר!",
  image: "https://i.imgur.com/Bh9Qy2O.png",
  rating: 5
},
{
  name: "חמוטל קרוגליק",
  text: "מורה מעולה. שיעורים מקצועיים ומסודרים. סבלנית, מתיחסת לכל בעיה וקושי, משקיעה מזמנה בשיעורי חזרה. תודה רבה ⚘",
  image: "/placeholder.svg",
  rating: 5
},
{
  name: "חנה פאעל",
  text: "סיון תודה ענקית על קורס א׳! בדרך הכל כך מיוחדת שלך, ההשקעה והאכפתיות האין סופית הצלחת ובגדול להביא אותי לקרוא ולהבין טקסטים ביוונית כבר אחרי 10 שיעורים!! גרמת לי להרגיש בטוחה להזמין אוכל ומשקאות בטברנה ובכלל בהתנהלות היומיומית ביוון. ממתינה לקורס ב׳",
  image: "/placeholder.svg",
  rating: 5
}


  ];

  const renderStars = () => (
    <div className="flex justify-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-greek-gold text-greek-gold" />
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-greek-turquoise/5 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>המלצות וחוות דעת</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            מה התלמידים שלי אומרים על חוויית הלימוד ({testimonials.length} המלצות)
          </p>
        </div>

        <div className={`overflow-x-auto scrollbar-hide -mx-4 px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="flex gap-4 min-w-fit">
            {testimonials.map((t, index) => (
              <div key={index} className="greek-card flex-shrink-0 w-80 bg-white shadow-lg rounded-lg p-6">
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full rounded-full object-cover shadow-md"
                      onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-greek-turquoise rounded-full flex items-center justify-center">
                      <Quote className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-greek-blue mb-1">{t.name}</h3>
                  {renderStars()}
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
