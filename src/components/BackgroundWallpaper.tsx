import React from 'react';

interface BackgroundWallpaperProps {
  imageUrl: string;
}

const BackgroundWallpaper: React.FC<BackgroundWallpaperProps> = ({ imageUrl }) => {
  return (
    <div 
      className="fixed inset-0 w-full h-[100svh] bg-cover bg-center -z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        filter: 'blur(8px)',
        transform: 'scale(1.1)',
        opacity: '0.7',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'opacity 0.8s ease-in-out'
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
          zIndex: '-5'
        }}
      />

      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: '-4'
        }}
      />

    </div>
  );
};

export default BackgroundWallpaper;
