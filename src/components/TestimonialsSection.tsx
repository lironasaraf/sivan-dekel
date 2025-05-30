import { useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const testimonials = [
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
      text: "מאוד ממליצה על סיוון מנסיון אישי. כמה סבלנות, רצינות ורצון שכל אחד ידבר יוונית תוך זמן קצר. מעבר לשיעורים עצמם, סיוון דואגת שיעמוד לרשות התלמיד המון חומר עזר, ומקיימת שיעורי הכנה לשיעורים השבועים. בנוסף לכל אלה היא סימפטית ומלמדת ברוגע ובחן, כך שאם החלטת ללמוד יוונית, זו המורה שלך 🙏",
      image: "/lovable-uploads/10a2415d-ce35-40bd-b319-db09da4d6d53.png",
      rating: 5
    },
    {
      name: "מירב טל-מעון",
      text: "בדיוק סיימתי את הקורס למתחילים ואני יכולה להגיד שסיוון היא מורה מעולה! למדנו המון ובצורה מעניינת וחוויתית. סיוון משלבת מגוון דרכי למידה- שיעורים בזום, סרטונים, אפליקציה ללמוד מילים ועוד. מומלץ ביותר!",
      image: "/lovable-uploads/ce84e45e-9b8d-407c-8ea3-faacfd6b4813.png",
      rating: 5
    },
    {
      name: "חמוטל קרוגליק",
      text: "סיוון מורה מעולה. סבלנית, מקצועית ומשקיעה זמן רב מעבר לשעות הקורס על מנת לוודא שכולם יבינו ויתקדמו. משרה אווירה נעימה וחיובית בשיעורים והכי חשוב - בזכותה לומדים יוונית!",
      image: "/lovable-uploads/ce84e45e-9b8d-407c-8ea3-faacfd6b4813.png",
      rating: 5
    },
    {
      name: "חנה פאעל",
      text: "סיון תודה ענקית על קורס א׳ בדרך הכל כך מיוחדת שלך, ההשקעה והאכפתיות האין סופית הצלחת ובגדול להביא אותי לקרוא ולהבין טקסטים ביוונית כבר אחרי 10 שיעורים!! גרמת לי להרגיש בטוחה להזמין אוכל ומשקאות בטברנה ובכלל בהתנהלות היומיומית ביוון ממתינה לקורס ב׳",
      image: "/lovable-uploads/ce84e45e-9b8d-407c-8ea3-faacfd6b4813.png",
      rating: 5
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
                      <p className="text-gray-700 leading-relaxed text-sm italic break-words hyphens-auto">
                        "{testimonial.text}"
                      </p>
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
