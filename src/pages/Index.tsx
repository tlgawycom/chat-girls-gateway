import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ChatButton from '../components/ChatButton';
import ChatRoom from '../components/ChatRoom';
import SearchTag from '../components/SearchTag';
import Footer from '../components/Footer';
import StarCursor from '../components/StarCursor';
import { Star, Sparkles, Music, Zap } from 'lucide-react';

const CHAT_LINK = "https://www.mersalarab.com/"; // Updated chat link

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<{ id: number, icon: string, top: number, left: number, size: number, delay: number }[]>([]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Create floating decoration icons
    const icons = [];
    for (let i = 0; i < 10; i++) {
      icons.push({
        id: i,
        icon: ['✨', '💫', '⭐', '🌟', '✺'][Math.floor(Math.random() * 5)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 0.5 + Math.random() * 1,
        delay: Math.random() * 5
      });
    }
    setFloatingIcons(icons);
  }, []);

  const chatRooms = [
    {
      name: "غرفة الود والمحبة",
      description: "غرفة للدردشة العامة والتعارف في جو من الود والإحترام المتبادل",
      image: "/lovable-uploads/e78b80da-5cb5-42d8-811d-ad3623dd4ac5.png",
      users: 253,
      chatLink: CHAT_LINK
    },
    {
      name: "مقهى الأصدقاء",
      description: "مساحة للنقاشات الهادفة وتبادل الأفكار والآراء بين الأصدقاء",
      image: "/lovable-uploads/17bd6e39-1d15-42c7-9d5a-406d23a7e2a7.png",
      users: 187,
      chatLink: CHAT_LINK
    },
    {
      name: "سوالف وضحك",
      description: "غرفة للمرح والضحك وتبادل النكت والقصص المضحكة",
      image: "/lovable-uploads/67d089e2-0b26-41a3-8514-4b31d7ff63a2.png",
      users: 142,
      chatLink: CHAT_LINK
    },
    {
      name: "همس القلوب",
      description: "ملتقى رومانسي للتعبير عن المشاعر والخواطر بأجواء راقية",
      image: "/lovable-uploads/21fb3d73-29c2-4e24-9b6f-cbee3e746580.png",
      users: 132,
      chatLink: CHAT_LINK
    },
    {
      name: "نجوم الخليج",
      description: "غرفة خاصة لأبناء دول الخليج العربي للتعارف وتبادل الثقافات",
      image: "/lovable-uploads/25100023-8075-4f0e-8a74-f826a28df319.png",
      users: 165,
      chatLink: CHAT_LINK
    },
    {
      name: "بنات وبس",
      description: "غرفة خاصة للبنات فقط للدردشة في مختلف المواضيع النسائية",
      image: "/lovable-uploads/865c94d2-da20-492e-928e-b978a5a42250.png",
      users: 198,
      chatLink: CHAT_LINK
    },
    {
      name: "شباب العرب",
      description: "غرفة للشباب العربي لمناقشة اهتماماتهم ومواضيعهم الخاصة",
      image: "/lovable-uploads/e760188b-c781-4f06-8bb9-954deecab821.png",
      users: 178,
      chatLink: CHAT_LINK
    },
    {
      name: "ألوان ومرح",
      description: "غرفة منوعة للترفيه والتسلية ومشاركة اللحظات السعيدة",
      image: "/lovable-uploads/de2c51c2-65d0-4ca5-9f2a-c6b4f6296086.png",
      users: 156,
      chatLink: CHAT_LINK
    }
  ];

  const searchTags = [
    "شات عربي", "دردشة مجانية", "تعارف", "أصدقاء جدد", 
    "دردشة صوتية", "شات الخليج", "غرف دردشة", "شات مصر",
    "دردشة بدون تسجيل", "شات سعودي", "تعارف بنات", "شات شباب",
    "دردشة خليجية", "أجمل بنات العرب", "شات كتابي"
  ];

  return (
    <div className={`min-h-screen bg-chat-gradient transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
      <Header />
      <StarCursor />
      
      {/* Floating Icons */}
      {floatingIcons.map(icon => (
        <div
          key={icon.id}
          className="floating-icon"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
            fontSize: `${icon.size}rem`,
            animationDelay: `${icon.delay}s`
          }}
        >
          {icon.icon}
        </div>
      ))}
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-chat-accent bg-chat-light rounded-full animate-fade-in relative group">
              أهلاً بك في عالم الدردشة الراقية
              <Star className="w-3 h-3 absolute -top-1 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lalezar mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="text-chat-dark">شات</span>
              <span className="text-chat-accent relative mx-2">
                مرسال
                <Sparkles className="absolute -top-5 right-0 w-6 h-6 text-yellow-400" />
              </span>
              <span className="text-chat-dark">العرب</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-10 animate-fade-in font-amiri" style={{ animationDelay: '200ms' }}>
              انضم إلى أكبر مجتمع دردشة عربي للتعارف وتكوين صداقات جديدة في أجواء راقية وممتعة مع مستخدمين من مختلف أنحاء الوطن العربي
            </p>
            
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <ChatButton text="دخول الدردشة الآن" href={CHAT_LINK} />
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-chat-primary opacity-10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-chat-secondary opacity-10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </section>
      
      {/* Chat Rooms Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-lalezar mb-4 relative inline-block">
              غرف الدردشة
              <Zap className="absolute -right-8 text-yellow-400 w-6 h-6" />
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-amiri">
              اختر الغرفة المناسبة لك وانضم إلى المحادثات المثيرة مع أشخاص يشاركونك نفس الاهتمامات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatRooms.map((room, index) => (
              <ChatRoom
                key={index}
                name={room.name}
                description={room.description}
                image={room.image}
                users={room.users}
                chatLink={room.chatLink}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Search Tags Section */}
      <section className="py-12 px-4 bg-white/50 dark:bg-chat-dark/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-lalezar mb-4 relative inline-block">
              الكلمات الدلالية
              <Music className="absolute -left-7 text-chat-accent w-5 h-5" />
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-amiri">
              ابحث عن موضوعات تهمك أو انضم إلى مجتمعات محددة
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center">
            {searchTags.map((tag, index) => (
              <SearchTag 
                key={index} 
                text={tag} 
                chatLink={CHAT_LINK} 
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Now CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative max-w-3xl mx-auto p-8 md:p-12 rounded-2xl glass-effect text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-chat-primary/20 to-chat-accent/20 backdrop-blur-md -z-10"></div>
            
            <h2 className="text-3xl font-lalezar mb-4 relative inline-block">
              انضم إلينا الآن
              <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-yellow-400" />
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300 font-amiri">
              لا تفوت فرصة التعارف والدردشة مع آلاف المستخدمين من مختلف الدول العربية
            </p>
            
            <ChatButton text="دخول شات مرسال العرب" href={CHAT_LINK} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
