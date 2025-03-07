
import { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

interface ChatButtonProps {
  text: string;
  href: string;
}

const ChatButton = ({ text, href }: ChatButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sparks, setSparks] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    // Delayed appearance for animation effect
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHovered) return;
    
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSpark = {
      id: Date.now(),
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    };
    
    setSparks(prev => [...prev, newSpark]);
    
    // Remove spark after animation completes
    setTimeout(() => {
      setSparks(prev => prev.filter(spark => spark.id !== newSpark.id));
    }, 500);
  };

  return (
    <a
      href={href}
      className={`chat-button relative animate-glow group overflow-hidden ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ transition: 'opacity 0.5s, transform 0.5s' }}
    >
      {sparks.map(spark => (
        <span 
          key={spark.id}
          className="magic-spark"
          style={{ 
            left: `${spark.x}%`, 
            top: `${spark.y}%` 
          }}
        />
      ))}
      
      <span className="flex items-center gap-2">
        {isHovered && <Sparkles className="w-4 h-4 animate-pulse-soft absolute -top-1 -right-1" />}
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
