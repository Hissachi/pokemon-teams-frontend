'use client';

import { useEffect, useState } from "react";

const SLIDESHOW_CONFIG = {
  backgrounds: [
    '/img/poke-bg1.jpg',
    '/img/poke-bg2.jpg',
    '/img/poke-bg3.jpg',
    '/img/poke-bg4.jpg',
  ],
  transitionInterval: 5000,
  transitionDuration: 1500,
  glowSettings: {
    blur: '25px',
    brightness: '1.8',
    sizeIncrease: '30px'
  }
};

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        (prev + 1) % SLIDESHOW_CONFIG.backgrounds.length
      );
    }, SLIDESHOW_CONFIG.transitionInterval);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {SLIDESHOW_CONFIG.backgrounds.map((bg, index) => (
        <BackgroundImage 
          key={bg}
          imageUrl={bg}
          isActive={index === currentIndex}
          transitionDuration={SLIDESHOW_CONFIG.transitionDuration}
          glowSettings={SLIDESHOW_CONFIG.glowSettings}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30" />
    </div>
  );
}

function BackgroundImage({ 
  imageUrl, 
  isActive, 
  transitionDuration,
  glowSettings
}: {
  imageUrl: string;
  isActive: boolean;
  transitionDuration: number;
  glowSettings: {
    blur: string;
    brightness: string;
    sizeIncrease: string;
  };
}) {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-${transitionDuration} ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        transitionDuration: `${transitionDuration}ms`
      }}
    >
      <div 
        className={`absolute inset-[-${glowSettings.sizeIncrease}] bg-cover bg-center transition-opacity duration-${transitionDuration} ease-in-out ${
          isActive ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: `blur(${glowSettings.blur}) brightness(${glowSettings.brightness})`,
          transitionDuration: `${transitionDuration}ms`
        }}
      />
    </div>
  );
}