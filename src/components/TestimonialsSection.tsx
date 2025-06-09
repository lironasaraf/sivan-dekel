import { useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '30px' }
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

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedTestimonials(newExpanded);
  };

  const testimonials = [
    {
      name: "רוניוס כרמי",
      text: "אחרי שנים של עולם יווני סביבי ואוצר שירים מטורף שאני מנגן החלטתי ובחרתי במורה הטובה ביותר,והכי יצירתית שיש. אני מברך על כך את בעלת דרך,מחשבה,והמון סובלנות מחוייכת עלי והצליחי....",
      image: "/lovable-uploads/1288b582-88db-4839-96f6-cfa7a6e80351.png",
      rating: 5
    },
    {
      name: "הדס תמיר",
      text: "ממליצה בכל ה❤️ ומפיצה בכל האי (כרתים) את שיבחה של סיוון מורה מעולה . מעבירה בצורה נפלאה את הבסיס של השפה הלא פשוטה הזאת .",
      image: "/lovable-uploads/29de74cf-69bd-4646-9d91-6cd409c78dd3.png",
      rating: 5
    },
    {
      name: "איתן סובל",
      text: "מורה מעולה,כיפית,מעבירה את השיעורים באופן מיוחד וחווייתי,בעלת ידע נרחב.מיצרת חומרי עזר מושקעים,מסודרים,אסטטיים וכאלו שעושים סדר ומקלים על הלמידה.היענות מלאה לבקשות ושאלות.תמורה מלאה ומהנה.ממליץ בחום רב.",
      image: "/lovable-uploads/bbb4dcd3-b436-412f-9b9d-0dc008b4258a.png",
      rating: 5
    },
    {
      name: "הילה וייש",
      text: "מורה מעולה! סיוון מלמדת בצורה סופר מקצועית, חוויתית ומעניינת. המלצה רותחת לכל מי שחושב ללמוד יוונית 👌🇬🇷",
      image: "/lovable-uploads/c6b3f18b-d19c-4d21-9223-e4ce3e372203.png",
      rating: 5
    },
    {
      name: "ערן קפלן",
      text: "גם אני עדיין לומד יוונית עם סיוון המדהימה שמעבירה את הקורס במקצועיות ועם השקעה יוצאת מגדר הרגיל כולל שיעורי תגבור וחזרה על החומר, סיוון שנותנת את כל כולה וזמינה לכל עיצה, הבהרה או בקשה. כל זאת אינו מובן מאליו ואני מנצל הזדמנות זו להודות לך מכל ליבי ולאחל לך חג חנוכה שמח",
      image: "/lovable-uploads/731c7913-d9a5-4c39-bb1f-5004103a051d.png",
      rating: 5
    },
    {
      name: "סיון זמיר",
      text: "מורה מעולה וסבלנית שיודעת להתאים עצמה למגבלות ואו לאילוצים של התלמיד. ממליץ מאד!",
      image: "/lovable-uploads/247cdad4-00f6-436c-ba6b-a88d2bf534ea.png",
      rating: 5
    },
    {
      name: "אלינור פרוימוביץ'",
      text: "מעבר למורה סבלנית, מקצועית, מסורה ובאמת מחוברת לשפה היוונית...תמצאו אישה חמה, נעימה, אותנטית ועם רצון גדול שתצליחו! מי שמחליט להירשם פשוט זוכה👑",
      image: "/lovable-uploads/74bc9f63-e4c8-450d-a80c-1cf1cad51135.png",
      rating: 5
    },
    {
      name: "קסם שער",
      text: "מומלצת ביותר ! מקצועית סבלנית תמיד פנויה לעזור למי שלא מבין או למי שפספס תשיעור ממש לא מובן מאליו האכפתיות שלה גם בשעות לא שעות תמיד נותנת את עצמה , אני ממליצה עליה לכל מי שרוצה ללמוד את השפה בצורה הטובה ביותר סיוון את פשוט תותחית תודה על הכל . 🇬🇷🙏🏽❤️",
      image: "/lovable-uploads/173c166d-33c2-4e36-a354-27281ca37315.png",
      rating: 5
    },
    {
      name: "אורית אלדר",
      text: "סיון מדהימה! מורה מעולה. השיעורים מושקעים, בנויים היטב, מאתגרים באופן שמעודד למידה ולא פחות מזה, כייפים. בנוסף לשיעורים, סיון עושה שיעורי תגבור שמסייעים להבנת החומר ולהטמעתו. ועוד לא הזכרתי את החומרים הכתובים והמצולמים שהיא שולחת בנדיבות רבה. בקיצור, ממליצה בחום. סיון את אחת ויחידה, אלופה❣️",
      image: "/lovable-uploads/92af37b2-0990-447d-b01f-27cff3d4a711.png",
      rating: 5
    },
    {
      name: "אבי פולסקי",
      text: "סיוון היא ה…..המורה ליוונית שיש, משקיעה בתלמידים ברמות על חלל סובלנית מאוד, הלימודים מלאים בשמחת חיים צחוקים תוך רכישת הידע ביוונית וההתקדמות מהירה ומדהימה הן מבחינת הידע הנרכש והן מבחינת היכולות שהתפתחו אצלי לשפה היוונית מדהים !!! כבר אחרי 6 שיעורים רוב התלמידים בקורס קוראים יוונית בסיסית, פשוט אין מורים כאלה בעולם סיוון דקל היא המורה שאתם רוצים ואם תזכו לה כמורתכם ליוונית זכיתם.",
      image: "/lovable-uploads/438a9eb8-b41b-4092-8450-2d2cc3729093.png",
      rating: 5
    },
    {
      name: "רקל בנסיוק פיבן",
      text: "מאוד ממליצה על סיוון מנסיון אישי. כמה סבלנות, רצינות ורצון שכל אחד ידבר יוונית תוך זמן קצר. מעבר לשיעורים עצמם, סיוון דואגת שיעמוד לרשות התלמיד המון חומר עזר, ומקיימת שיעורי הכנה לשיעורים השבועיים. בנוסף לכל אלה היא סימפטית ומלמדת ברוגע ובחן, כך שאם החלטת ללמוד יוונית, זו המורה שלך 🙏",
      image: "/lovable-uploads/10a2415d-ce35-40bd-b319-db09da4d6d53.png",
      rating: 5
    },
    {
      name: "מירב טל-מעון",
      text: "בדיוק סיימתי את הקורס למתחילים ואני יכולה להגיד שסיוון היא מורה מעולה! למדנו המון ובצורה מעניינת וחוויתית. סיוון משלבת מגוון דרכי למידה- שיעורים בזום, סרטונים, אפליקציה ללמוד מילים ועוד. מומלץ ביותר!",
      image: "/lovable-uploads/6c7c0c03-8882-4daa-bfbf-b517da965e87.png",
      rating: 5
    },
    {
      name: "חמוטל קרוגליק",
      text: "סיוון מורה מעולה. סבלנית, מקצועית ומשקיעה זמן רב מעבר לשעות הקורס על מנת לוודא שכולם יבינו ויתקדמו. משרה אווירה נעימה וחיובית בשיעורים והכי חשוב - בזכותה לומדים יוונית!",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "חנה פאעל",
      text: "סיון תודה ענקית על קורס א׳ בדרך הכל כך מיוחדת שלך, ההשקעה והאכפתיות האין סופית הצלחת ובגדול להביא אותי לקרוא ולהבין טקסטים ביוונית כבר אחרי 10 שיעורים!! גרמת לי להרגיש בטוחה להזמין אוכל ומשקאות בטברנה ובכלל בהתנהלות היומיומית ביוון ממתינה לקורס ב׳",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "רון שץ",
      text: "סיוון מורה מעולה. אנחנו לומדים אצלה מספר חודשים: התקדמנו מאוד והלימוד הינו מעמיק ומהנה. סיון משקיעה המון עבודה בהכנת חומרים המתאימים לרמת הקבוצה וכן בהכנת עזרים מהנים. בקיצור, כיף ללמוד יווניות עם סיוון.",
      image: "/lovable-uploads/ef8087c5-af49-447f-9394-6aecda2d5a46.png",
      rating: 5
    },
    {
      name: "שוגון כהן",
      text: "בתור דוברי עברית, יש יתרון גדול שהמורה שלך גם דוברת עברית, סיוון מנגישה את השפה היוונית בצורה כיפית ,לא מוותרת על הדקדוק, ותמיד תמצא את הדרך שלך קל ללמוד ממנה את השפה(דיאלוגים טקסטים, שירים ,או טריוויה). מומלצת ביותר",
      image: "/lovable-uploads/404e09f8-bb34-4c9e-8433-e19aa913088c.png",
      rating: 5
    },
    {
      name: "אריק פרטוק",
      text: "סיון יקרה איזה כייף שפגשתי אותך , זכיתי בגדול, התחלתי ללמוד יוונית אצלך לפני שלושה חודשים, למדתי המון המון מילים ומשפטים, למדנו דקדוק היכן שצריך, ידעת לנווט אותי על פי ההתקדמות, עשינו חזרות והכל תוך הנאה , צחוקים, ודבקות במטרה. תודה שאת זמינה לשאלות , תודה על שיעורי הבית החשובים שאת דואגת לתת לי . תודה שבזכותך הנסיעה ליוון תהיה מהנה יותר 😘😘😘",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: "מירב כהן קולקר",
      text: "אליפות! המורה הכי טובה שיש! סבלנית ויסודית, מלמדת במקצועיות, יודעת לענות על כל שאלה ותהיה יודעת לפרגן ולחזק את הביטחון! אני נהנית מכל רגע🥰",
      image: "/lovable-uploads/a42c4a50-a476-4719-9f87-3ddbbab71550.png",
      rating: 5
    },
    {
      name: "לירון אורלב",
      text: "מצטרפת לכל מילה ומוסיפה… שנתיים וחצי שאני גרה ביוון, עובדת עם יוונים וגם מנסה ללמוד את השפה. הייתי בשיעורים קבוצתיים עם מורה יוונית ואחר כך עם שני מורים יווניים באופן פרטני. התסכול והייאוש מהשפה היוונית היו גדולים כל כך עד שכבר רציתי לוותר. עד ששמעתי מחברה על סיון והקורסים שלה. כבר בשיעור הראשון התמוססו להן הרגשות הקשות ואל הלב חלחלה תקווה זעירה… בשיעור השני כבר הרגשתי \"בבית\" ואחרי השיעור החמישי כבר מצאתי את עצמי מדברת עם יוונים בסופר ובעבודה(: השיעורים איתך היו משב רוח נהדר של איכות, של שיקום ביטחון עצמי הרוס, של הנאה צרופה וחדוות למידה. תודה על הקורס המוקפד, על הרגישות לכל פרט, על החיוך וההקשבה. ניפגש בקורס ההמשך בקרוב❤️",
      shortText: "מצטרפת לכל מילה ומוסיפה… שנתיים וחצי שאני גרה ביוון, עובדת עם יוונים וגם מנסה ללמוד את השפה. הייתי בשיעורים קבוצתיים וגם פרטניים עד שרציתי לוותר.",
      image: "/lovable-uploads/eed3dd74-6bcb-461b-b889-168d7b2471a2.png",
      rating: 5,
      expandable: true
    },
    {
      name: "מזל צדיק ברקו",
      text: "Η δασκάλα μου είναι καλή המורה שלי טובה. איך למדתי לכתוב ולקרוא ב10 שיעורים?? סיוון דקל!!! נתראה בקורס למתקדמים. Ευχαριστώ πολύ!",
      image: "/lovable-uploads/57566856-7d2f-4b24-a384-129fb0427d7d.png",
      rating: 5
    },
    {
      name: "bennie loval",
      text: "מסיים בימים אלו את הקורס (יוונית למתחילים א'). סיון המקסימה הצליחה בנועם ובמקצועיות \"להחזיר אותי אל ספסל הלימודים\" עשרות שנים אחרי ש\"נשבעתי\" שזהו, לא לומד יותר בחיים באופן מוסדר, ובטח שלא נבחן ו/או מכין שוב שיעורי בית וכו' (למרות התארים האקדמיים 🤦). סיון היא הרבה יותר ממורה טובה: היא משקיענית, מקצוענית, נעימה  ורגישה. אף שהקורס מוגדר כ-10 שיעורים, היא שם עבורנו הרבה מעבר לכך, עם מפגש שבועי נוסף באורך מלא שמוגדר כ\"חזרה\", עם התעקשות שלה לחלק את המחזור ל-2 קבוצות קטנות יותר לטובת יתר קשב ותשומת לב למשתתפים (ובכך להעמיס על עצמה כפל עבודה וזמן הוראה) – אף שבזום לכאורה אין בעיה ללמד קבוצה בכל גודל. את השיעורים סיון מעבירה בנועם רב כמעין שיחה זורמת ומענינת, מתובלת בסיפורים ושירים ביוונית, מתענינת בכל אחד מאיתנו בשיעור ולאחריו, מעודדת ומפרגנת. וזה - כשגם ב\"דרישות\" מאיתנו (שיעורי הבית...) סיון לא עושה הנחות, ויודעת בקיסמה להיות \"דורשנית\" ואסרטיבית מחד, ומאידך - בסופר נעימות והבטחה מתמשכת שלה אלינו שהדברים חשובים וכדאיים, וש\"תיכף הכל יתחבר לנו\". הקורס הוא הרבה הרבה מעבר לשיעורי שינון סתמיים (בשביל זה היינו יכולים ללמוד ב\"דואולינגו\"), כשלסיון חשוב כל כך שגם נבין, גם נלמד, וגם נהנה. מומלצת ביותר!!! 👑",
      shortText: "מסיים בימים אלו את הקורס (יוונית למתחילים א'). סיון המקסימה הצליחה בנועם ובמקצועיות \"להחזיר אותי אל ספסל הלימודים\" עשרות שנים אחרי ש\"נשבעתי\" שזהו, לא לומד יותר בחיים באופן מוסדר.",
      image: "/lovable-uploads/30381914-ca43-4f72-b190-7a8aaa2fbacc.png",
      rating: 5,
      expandable: true
    },
    {
      name: "דיתי",
      text: "Αγαπητέ Σιβάν, φίλε μου מצטרפת לכל מה שנאמר ונכתב. אכן ערב מיוחד וקסום. היה לי כייף ומרתק לפגוש ולהכיר את האנשים שמאחורי הפנים בזום. את עצמך מורה מדהימה, ייחודית, יסודית, משקיענית עד בלי די, סבלנית ומכילה ומלאת מוטיבציה. אין ספק שבזכותך ובזכות שיטות הלימוד שלך הגענו לאן שהגענו... התוצאות מדברות בעד עצמן. לך ולחיים מגיעה תודה גדולה על ההשקעה, הטרחה, האוכל הטעים והארוח בביתכם ברוחב לב ומכל הלב. מבחינתי מה שהיה אתמול בערב היה מעבר למסיבת סיום, נוצרו חיבורים חבריים בין האנשים וניכר כי כולם ישמחו ויתרגשו להיפגש שוב, בין אם בקורס ההמשך ובין אם בהזדמנות אחרת (למשל אצל אלפרד על היאכטה 😃). ευχαριστώ πολύ באהבה ממני, דיתי",
      shortText: "Αγαπητέ Σιβάν, φίλε μου מצטרפת לכל מה שנאמר ונכתב. אכן ערב מיוחד וקסום. היה לי כייף ומרתק לפגוש ולהכיר את האנשים שמאחורי הפנים בזום.",
      image: "/lovable-uploads/0f8f645b-c2ba-485a-a044-391eb07c129b.png",
      rating: 5,
      expandable: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-greek-gold fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const renderTestimonialText = (testimonial: any, index: number) => {
    const isExpanded = expandedTestimonials.has(index);
    const hasShortText = testimonial.shortText;
    
    if (!hasShortText) {
      return (
        <p className="text-gray-700 leading-relaxed text-sm italic break-words hyphens-auto">
          "{testimonial.text}"
        </p>
      );
    }

    return (
      <div className="text-gray-700 leading-relaxed text-sm italic break-words hyphens-auto">
        <p>
          "{isExpanded ? testimonial.text : testimonial.shortText}"
        </p>
        <button
          onClick={() => toggleExpanded(index)}
          className="text-greek-blue hover:text-greek-gold text-xs mt-2 underline focus:outline-none"
        >
          {isExpanded ? 'קרא פחות' : 'קרא עוד...'}
        </button>
      </div>
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-full">
        <div className="text-center mb-12">
          <h2 className={`section-heading transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            חוות דעת של תלמידים מרוצים
          </h2>
          <p className={`text-xl text-gray-700 mt-4 max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            מה אומרים התלמידים שלי על החוויה
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative px-4 md:px-12 lg:px-16">
            <Carousel 
              className="w-full overflow-hidden" 
              opts={{ 
                align: "start", 
                loop: true, 
                slidesToScroll: 1, 
                direction: "rtl" 
              }}
            >
              <CarouselContent className="flex -ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <div className="greek-card text-center h-full">
                      <div className="relative mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-greek-gold/20"
                        />
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-greek-turquoise bg-white rounded-full p-1" />
                      </div>
                      <h4 className="text-lg font-semibold text-greek-blue mb-3 break-words">{testimonial.name}</h4>
                      <div className="flex justify-center mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      {renderTestimonialText(testimonial, index)}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 hover:bg-white border-2 border-greek-gold/30 hover:border-greek-gold text-greek-blue hover:text-greek-gold shadow-lg hidden md:flex" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 hover:bg-white border-2 border-greek-gold/30 hover:border-greek-gold text-greek-blue hover:text-greek-gold shadow-lg hidden md:flex" />
              
              {/* Mobile navigation buttons */}
              <div className="flex justify-center gap-4 mt-6 md:hidden">
                <CarouselPrevious className="relative left-auto top-auto translate-y-0 h-10 w-10 bg-white/90 hover:bg-white border-2 border-greek-gold/30 hover:border-greek-gold text-greek-blue hover:text-greek-gold shadow-lg" />
                <CarouselNext className="relative right-auto top-auto translate-y-0 h-10 w-10 bg-white/90 hover:bg-white border-2 border-greek-gold/30 hover:border-greek-gold text-greek-blue hover:text-greek-gold shadow-lg" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
