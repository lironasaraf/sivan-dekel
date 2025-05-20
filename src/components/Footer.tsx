
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-greek-blue text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-right">
            <h3 className="text-xl font-serif font-bold mb-4">יוונית לכל</h3>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="flex items-center gap-2">
                <span>info@greekforall.com</span>
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2">
                <span>050-1234567</span>
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2">
                <span>תל אביב, ישראל</span>
                <MapPin className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right rtl">
            <p>&copy; {currentYear} כל הזכויות שמורות</p>
            <p className="text-sm text-gray-300 mt-1">לימוד יוונית בדרך ישראלית</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
