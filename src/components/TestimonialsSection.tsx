
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
      text: "מעבר למורה סבלנית, מקצועית, מסורה ובאמת מחוברת לשפה היוונית…תמצאו אישה חמה, נעימה, אותנטית ועם רצון גדול שתצליחו! מי שמחליט להירשם פשוט זוכה👑",
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
      name: "שרה כהן",
      text: "השיעורים עם דנה שינו לי את כל התפיסה על לימוד יוונית. בתוך חודשיים כבר הצלחתי לנהל שיחות בסיסיות ביוון!",
      image: "/lovable-uploads/778f676d-f282-4c50-bc83-15aa98877340.png",
      rating: 5
    },
    {
      name: "מיכאל לוי",
      text: "הגישה הייחודית של דנה עושה את השפה היוונית נגישה ומהנה. הייתי חושש מהקושי, אבל היא הוכיחה לי שזה אפשרי!",
      image: "/lovable-uploads/f1a318df-4d71-4278-bb22-18470931c264.png",
      rating: 5
    },
    {
      name: "רחל אברהם",
      text: "השילוב של משחקים ותחרויות בשיעורים הפך את הלימוד לחוויה מרגשת. כל שיעור הוא הרפתקה חדשה!",
      image: "/lovable-uploads/61fe26f2-2f4e-4689-ab54-55c82964ceba.png",
      rating: 5
    },
    {
      name: "דוד רוזן",
      text: "אחרי שנים של ניסיונות, רק עם דנה הצלחתי להבין את הדקדוק היווני. השיטה שלה פשוט גאונית!",
      image: "/lovable-uploads/98c608f6-6515-4d0c-b328-24a74bd94f92.png",
      rating: 5
    },
    {
      name: "יעל גרין",
      text: "הליווי האישי שדנה נותנת בין השיעורים עזר לי להתקדם הרבה יותר מהר. היא תמיד זמינה לעזרה!",
      image: "/lovable-uploads/b41335ae-78bf-49a1-a23f-688fdbeabb5e.png",
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
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            חוות דעת של תלמידים מרוצים
          </h2>
          <p className={`text-xl text-gray-700 mt-4 max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            מה אומרים התלמידים שלי על החוויה
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <Carousel className="w-full" opts={{ align: "start", loop: true, slidesToScroll: 1 }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="greek-card text-center h-full">
                    <div className="relative mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-greek-gold/20"
                      />
                      <Quote className="absolute -top-2 -right-2 h-6 w-6 text-greek-turquoise bg-white rounded-full p-1" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-greek-blue mb-3">{testimonial.name}</h4>
                    
                    <div className="flex justify-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-sm italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
