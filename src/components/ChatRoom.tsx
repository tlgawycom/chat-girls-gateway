
import { useState, useEffect } from 'react';
import { Users, Heart, MessageCircle, Sparkles } from 'lucide-react';

interface ChatRoomProps {
  name: string;
  description: string;
  image: string;
  users: number;
  chatLink: string;
}

const ChatRoom = ({ name, description, image, users, chatLink }: ChatRoomProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loved, setLoved] = useState(false);

  return (
    <div 
      className="room-card animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 right-0 p-4">
          <h3 className="text-xl font-lalezar text-white mb-1 relative group">
            {name}
            {isHovered && (
              <Sparkles className="w-3 h-3 absolute -top-2 -right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </h3>
          <div className="flex items-center gap-2 text-white/80">
            <Users className="w-4 h-4" />
            <span className="text-sm">{users} متصل</span>
          </div>
        </div>
        
        <button 
          className={`absolute top-3 left-3 bg-white/90 rounded-full p-1.5 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
          onClick={(e) => {
            e.preventDefault();
            setLoved(!loved);
          }}
        >
          <Heart className={`w-4 h-4 transition-colors duration-300 ${loved ? 'text-pink-500 fill-pink-500' : isHovered ? 'text-pink-500' : 'text-chat-primary'}`} />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-amiri">{description}</p>
        <a 
          href={chatLink}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-chat-light dark:bg-chat-accent/10 text-chat-accent transition-all duration-300 hover:bg-chat-accent hover:text-white group"
        >
          <MessageCircle className="w-4 h-4" />
          <span>دخول الغرفة</span>
          <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default ChatRoom;
