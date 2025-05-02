import React, { useEffect, useState } from 'react';

interface BackgroundWallpaperProps {
  imageUrl: string;
}

const BackgroundWallpaper: React.FC<BackgroundWallpaperProps> = ({ imageUrl }) => {
  const [blurAmount, setBlurAmount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 1000;
      const minBlur = 5;
      const maxBlur = 20;

      const normalized = Math.min(scrollY / maxScroll, 1);
      const blur = minBlur + (maxBlur - minBlur) * normalized;

      setBlurAmount(blur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-[100svh] bg-cover bg-center -z-10 transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${imageUrl})`,
        filter: `blur(${blurAmount}px)`,
        transform: 'scale(1.1)',
        opacity: '0.9',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: '-5',
        }}
      />

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: '-4',
        }}
      />
    </div>
  );
};

export default BackgroundWallpaper;