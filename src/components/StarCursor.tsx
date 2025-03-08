
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  rotation: number;
}

const StarCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [stars, setStars] = useState<StarParticle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create a new star
      const newStar: StarParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: 0.5 + Math.random() * 1,
        color: ['#FFD700', '#FFA500', '#9D4EDD', '#E0A9CA'][Math.floor(Math.random() * 4)],
        opacity: 0.7 + Math.random() * 0.3,
        rotation: Math.random() * 360
      };
      
      setStars(prevStars => [...prevStars, newStar]);
      
      // Remove old stars to prevent too many elements
      setTimeout(() => {
        setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="star-cursor-container fixed inset-0 pointer-events-none z-50">
      {/* Main cursor star */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Star
          size={20}
          className="text-yellow-400 fill-yellow-400 animate-pulse-soft"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
      
      {/* Trail stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="fixed pointer-events-none z-50 transition-all duration-1000"
          style={{
            left: star.x,
            top: star.y,
            opacity: star.opacity,
            transform: `translate(-50%, -50%) scale(${star.size}) rotate(${star.rotation}deg)`,
          }}
        >
          <Star
            size={10}
            color={star.color}
            fill={star.color}
            className="animate-fade-out"
          />
        </div>
      ))}
    </div>
  );
};

export default StarCursor;
