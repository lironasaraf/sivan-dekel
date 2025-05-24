
import { useEffect, useState, useRef } from 'react';

const GreekGallery = () => {
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

  const galleryImages = [
    {
      src: "/lovable-uploads/98c608f6-6515-4d0c-b328-24a74bd94f92.png",
      alt: "נוף יווני מדהים עם בריכה אינסוף",
      caption: "הים היווני הקסום"
    },
    {
      src: "/lovable-uploads/f1a318df-4d71-4278-bb22-18470931c264.png",
      alt: "מרפסת יוונית עם נוף לים",
      caption: "מרפסות הקסומות של יוון"
    },
    {
      src: "/lovable-uploads/5dce7c4a-a42e-4c3a-bc23-f76c2f6ef3c2.png",
      alt: "כיפות כחולות של סנטוריני",
      caption: "הכיפות הכחולות המפורסמות"
    },
    {
      src: "/lovable-uploads/b41335ae-78bf-49a1-a23f-688fdbeabb5e.png",
      alt: "שוק יווני מסורתי",
      caption: "שווקים מקומיים אותנטיים"
    },
    {
      src: "/lovable-uploads/61fe26f2-2f4e-4689-ab54-55c82964ceba.png",
      alt: "ריקוד יווני מסורתי",
      caption: "מסורת הריקוד היוונית"
    },
    {
      src: "/lovable-uploads/c34f5b5e-8f82-4d71-a1b6-6f802c975fb5.png",
      alt: "תבלינים בשוק יווני",
      caption: "ארומות ותבלינים יווניים"
    }
  ];

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-greek-sand/10 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            יוון שלי
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            תמונות מהמקומות שאני הכי אוהבת ביוון - אלו שהשראו אותי ללמד את השפה הזו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4 text-white text-right">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 bg-greek-gold/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreekGallery;
