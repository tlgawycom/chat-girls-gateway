
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 mt-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - شات مرسال العرب
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>تطوير بواسطة</span>
            <a 
              href="https://tlgawy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-chat-accent transition-colors"
            >
              <span>منصة تلجاوي لخدمات الويب</span>
              <Heart className="w-3 h-3 mr-1 inline-block text-chat-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
