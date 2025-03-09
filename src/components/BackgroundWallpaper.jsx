import React from 'react';

const BackgroundWallpaper = ({ imageUrl }) => {
  return (
    <div 
      className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        filter: 'blur(5px)',
        transform: 'scale(1.05)',
        opacity: '0.6',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
          zIndex: '-5'
        }}
      />
    </div>
  );
};

export default BackgroundWallpaper;
