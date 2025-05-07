import React, { useState, useRef } from 'react';
import '../styles/customZoom.css';

interface CustomZoomProps {
  children: React.ReactElement<any>;
  blurAmount?: string;
  zoomScale?: number;
}

const CustomZoom: React.FC<CustomZoomProps> = ({ 
  children, 
  zoomScale = 1.0
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleZoom = () => {
    setIsZoomed(true);
    document.body.style.overflow = 'hidden';
    setAnimationComplete(false);
    
    setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
  };

  const handleClose = () => {
    setIsClosing(true);
    setAnimationComplete(false);
    document.body.style.overflow = '';
    
    setTimeout(() => {
      setIsClosing(false);
      setIsZoomed(false);
    }, 300);
  };

  // clone children, remove .zoom-thumbnail in modal
  const modalChild = React.cloneElement(children, {
    className: children.props.className
      ? children.props.className.replace('zoom-thumbnail', '').replace(/\s+/g, ' ').trim()
      : undefined
  });

  return (
    <div className="custom-zoom-container">
      <div className="custom-zoom-image" onClick={handleZoom}>
        {children}
      </div>
      
      {(isZoomed || isClosing) && (
        <div 
          ref={overlayRef}
          className={`custom-zoom-overlay ${isClosing ? 'closing' : ''}`}
          onClick={handleClose}
        >
          <div 
            className="custom-zoom-content" 
            onClick={e => e.stopPropagation()}
          >
            <div 
              ref={contentRef}
              className={`custom-zoom-img-container ${isClosing ? 'closing' : ''}`}
              style={animationComplete && !isClosing ? { transform: `scale(${zoomScale})` } : undefined}
            >
              {modalChild}
            </div>
          </div>
          <button className="custom-zoom-close" onClick={handleClose}>
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomZoom; 