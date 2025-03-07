
import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface SearchTagProps {
  text: string;
  chatLink: string;
  delay?: number;
}

const SearchTag = ({ text, chatLink, delay = 0 }: SearchTagProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={chatLink}
      className="tag-button animate-fade-in relative group"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Search className={`w-3.5 h-3.5 ml-1.5 opacity-70 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
      {text}
      {isHovered && (
        <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-white animate-pulse-soft" />
      )}
    </a>
  );
};

export default SearchTag;
