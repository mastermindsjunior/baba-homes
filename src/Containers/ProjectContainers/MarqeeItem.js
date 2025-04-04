import React, { useState, useEffect, useRef } from 'react';

const MarqeeItem = ({ src, playButtonSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  const videoError = (e) => {
    console.error('Error loading video:', e);
    }

  useEffect(() => {
    // Check if the device is mobile based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    const video = document.querySelector('video');
video.addEventListener('error', videoError);

handleResize(); // Initial check
window.addEventListener('resize', handleResize); // Listen for window resize

return () =>{
  
  window.removeEventListener('resize', handleResize);
  video.removeEventListener('error', videoError);
} // Clean up listener
  }, []);

  const handleMouseEnter = (event) => {
    if (!isMobile) {
      setIsHovered(true);
      event.currentTarget.play();
    }
  };

  const handleMouseLeave = (event) => {
    if (!isMobile) {
      setIsHovered(false);
      event.currentTarget.pause();
      event.currentTarget.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isMobile && videoRef.current) {
      videoRef.current.play(); // Autoplay on mobile devices
    }
  }, [isMobile]); // Autoplay only when on mobile

  return (
    <div
      style={{
        padding: '0.5rem',
        display: 'inline-block',
        width: '100%',
      }}
    >
      <div style={{ position: 'relative', height: '80dvh' }}>
        {/* Video */}
        <video
          ref={videoRef}
          src={src}
          preload="auto"
          style={{
            height: '100%',
            width: '100%',
            cursor: 'pointer',
            objectFit: 'cover',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
          loop
          playsInline
        />

        {/* Overlay with Play Button */}
        {!isHovered && !isMobile && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <img
              src={playButtonSrc || 'video/play.png'}
              alt="Play"
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarqeeItem;
