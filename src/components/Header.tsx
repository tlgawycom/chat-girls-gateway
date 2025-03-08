
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 glass-effect shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 relative">
          <img 
            src="/lovable-uploads/7ac7317b-510a-4760-bf4c-950675d2d716.png" 
            alt="شات مرسال العرب"
            className="h-16 w-auto"
          />
          <h1 className="text-2xl font-lalezar text-chat-dark relative group">
            <span className="text-chat-accent group-hover:animate-pulse-soft">شات</span>
            <span className="mx-1 relative">
              مرسال
              <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span>العرب</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
