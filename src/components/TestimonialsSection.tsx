
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
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            חוות דעת של תלמידים מרוצים
          </h2>
          <p className={`text-xl text-gray-700 mt-4 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            מה אומרים התלמידים שלי על החוויה
          </p>
        </div>

        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
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
