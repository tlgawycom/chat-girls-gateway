
import { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  text: string;
  href: string;
}

const ChatButton = ({ text, href }: ChatButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delayed appearance for animation effect
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a
      href={href}
      className={`chat-button animate-glow group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: 'opacity 0.5s, transform 0.5s' }}
    >
      <span className="flex items-center gap-2">
        {text}
        <span className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-[-4px]' : ''}`}>
          {isHovered ? (
            <ArrowRight className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
        </span>
      </span>
    </a>
  );
};

export default ChatButton;
