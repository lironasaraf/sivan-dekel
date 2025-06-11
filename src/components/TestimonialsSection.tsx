import { useEffect, useState, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);
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

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());
    api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));

    return () => {
      api.off("select", () => setCurrentSlide(api.selectedScrollSnap()));
    }
  }, [api]);

  const testimonials = [
  {
    name: "דביר קריספל",
    text: "סיוון זה הייתה התשובה לבקשתי ללמוד יוונית! אני בן 60 ולא תפסתי שפות בקלות, אבל בקורס של סיוון הכל הלך חלק, כיף וברור. היא מורה מעולה! יש לה יכולת להתאים את עצמה לכל אחד לפי הצרכים שלו.",
    image: "/lovable-uploads/247cdad4-00f6-436c-ba6b-a88d2bf534ea.png",
    rating: 5
  },
  {
    name: "מיכל ליברמן",
    text: "המורה הכי טובה שהייתה לי!! אדיבה, מקצועית, סובלנית ויש לה שיטה מדהימה. ברגע שהתחלתי איתה, השפה הפכה לנוחה וכיפית. מעבר לזה שהיא מורה יוצאת מן הכלל, היא בן אדם עם לב זהב. ממליצה מכל הלב!",
    image: "/lovable-uploads/30381914-ca43-4f72-b190-7a8aaa2fbacc.png",
    rating: 5
  },
  {
    name: "איריס פנטון",
    text: "סיוון דקל מורה מקסימה, מקצועית ונעימה לזוז איתה לכיוון היוונית, שעדיין נראית קשה אבל יש לה טיפים ודרכים יצירתיות להגיע ללימוד טוב יותר ובהנאה. ממליצה לכל מי שחולם ללמוד יוונית!",
    image: "/lovable-uploads/19cb92b5-51f8-4369-bedf-303197adffd8.png",
    rating: 5
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
];

  const renderStars = (rating) => (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'fill-greek-gold text-greek-gold' : 'text-gray-300'}`}
        />
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

        <div className={`relative max-w-7xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: false,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4 scroll-smooth">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="greek-card h-full flex flex-col min-h-[400px]">
                    <div className="text-center mb-4">
                      <div className="relative w-16 h-16 mx-auto mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover shadow-md"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-greek-turquoise rounded-full flex items-center justify-center">
                          <Quote className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-greek-blue mb-2">{testimonial.name}</h3>
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="flex-1 flex items-center">
                      <p className="text-gray-700 text-center leading-relaxed text-sm">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-greek-blue hover:bg-greek-turquoise/10 -left-12 hidden md:flex" />
            <CarouselNext className="text-greek-blue hover:bg-greek-turquoise/10 -right-12 hidden md:flex" />
          </Carousel>

          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={() => api?.scrollPrev()}
              className="px-4 py-2 bg-greek-turquoise text-white rounded-lg hover:bg-greek-turquoise/80 transition-colors"
            >
              ← קודם
            </button>
            <span className="px-4 py-2 text-gray-600 bg-white rounded-lg border">
              {currentSlide + 1} מתוך {testimonials.length}
            </span>
            <button
              onClick={() => api?.scrollNext()}
              className="px-4 py-2 bg-greek-turquoise text-white rounded-lg hover:bg-greek-turquoise/80 transition-colors"
            >
              הבא →
            </button>
          </div>

          <div className="hidden md:flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-greek-turquoise' : 'bg-gray-300'}`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
