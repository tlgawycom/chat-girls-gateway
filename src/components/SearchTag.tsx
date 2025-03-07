
import { Search } from 'lucide-react';

interface SearchTagProps {
  text: string;
  chatLink: string;
  delay?: number;
}

const SearchTag = ({ text, chatLink, delay = 0 }: SearchTagProps) => {
  return (
    <a 
      href={chatLink}
      className="tag-button animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Search className="w-3.5 h-3.5 ml-1.5 opacity-70" />
      {text}
    </a>
  );
};

export default SearchTag;
