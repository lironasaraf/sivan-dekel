
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-scroll';

const OfferSection = () => {
  const offerings = [
    {
      title: "קורסים אונליין",
      target: "course"
    },
    {
      title: "שיעורים פרטיים – פרונטלי/זום",
      target: "contact"
    },
    {
      title: "סדנאות לימוד יוונית",
      target: "greek-living-room"
    },
    {
      title: "ספר לימוד ייחודי",
      target: "book"
    },
    {
      title: "חבילת ייעוץ",
      target: "athens-consultation"
    }
  ];

  return (
    <section id="offer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-heading">מה אני מציעה?</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            מגוון אפשרויות ללימוד השפה היוונית, מותאמות לצרכים והעדפות שונות
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {offerings.map((offering, index) => (
              <Link
                key={index}
                to={offering.target}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-3 text-right hover:bg-gray-50 p-4 rounded-lg transition-colors">
                  <CheckCircle className="h-5 w-5 text-greek-turquoise flex-shrink-0" />
                  <span className="text-lg text-gray-700 hover:text-greek-blue transition-colors">
                    {offering.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
