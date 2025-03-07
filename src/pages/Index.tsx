
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ChatButton from '../components/ChatButton';
import ChatRoom from '../components/ChatRoom';
import SearchTag from '../components/SearchTag';
import Footer from '../components/Footer';

const CHAT_LINK = "https://tlgawy.com/"; // The chat link to redirect to

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const chatRooms = [
    {
      name: "غرفة الود والمحبة",
      description: "غرفة للدردشة العامة والتعارف في جو من الود والإحترام المتبادل",
      image: "https://i.imgur.com/cGwkUsg.jpg",
      users: 253,
      chatLink: CHAT_LINK
    },
    {
      name: "مقهى الأصدقاء",
      description: "مساحة للنقاشات الهادفة وتبادل الأفكار والآراء بين الأصدقاء",
      image: "https://i.imgur.com/4KlolZF.jpg",
      users: 187,
      chatLink: CHAT_LINK
    },
    {
      name: "سوالف وضحك",
      description: "غرفة للمرح والضحك وتبادل النكت والقصص المضحكة",
      image: "https://i.imgur.com/TgNONn3.jpg",
      users: 142,
      chatLink: CHAT_LINK
    },
    {
      name: "همس القلوب",
      description: "ملتقى رومانسي للتعبير عن المشاعر والخواطر بأجواء راقية",
      image: "https://i.imgur.com/oC1lfBv.jpg",
      users: 132,
      chatLink: CHAT_LINK
    }
  ];

  const searchTags = [
    "شات عربي", "دردشة مجانية", "تعارف", "أصدقاء جدد", 
    "دردشة صوتية", "شات الخليج", "غرف دردشة", "شات مصر",
    "دردشة بدون تسجيل", "شات سعودي", "تعارف بنات"
  ];

  return (
    <div className={`min-h-screen bg-chat-gradient transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-chat-accent bg-chat-light rounded-full animate-fade-in">
              أهلاً بك في عالم الدردشة الراقية
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="text-chat-dark">شات</span>
              <span className="text-chat-accent"> مرسال </span>
              <span className="text-chat-dark">العرب</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
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
            <h2 className="text-3xl font-bold mb-4">غرف الدردشة</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
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
            <h2 className="text-2xl font-bold mb-4">الكلمات الدلالية</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
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
            
            <h2 className="text-3xl font-bold mb-4">انضم إلينا الآن</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
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
