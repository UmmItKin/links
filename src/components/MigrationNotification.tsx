import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';

interface MigrationNotificationProps {
  onClose?: () => void;
}

const MigrationNotification: React.FC<MigrationNotificationProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the notification before
    const hasSeenNotification = sessionStorage.getItem('migration-notification-dismissed');
    
    if (!hasSeenNotification) {
      setIsVisible(true);
      setIsAnimating(true);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const handleDontShowAgain = () => {
    sessionStorage.setItem('migration-notification-dismissed', 'true');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Notification Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div 
          className={`bg-gray-900 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 ${
            isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
          }`}
        >
          {/* Header */}
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg">
                  <IoNotifications className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Website Migration Notice</h3>
              </div>
            </div>

          {/* Content */}
          <div className="mb-6">
            <div className="flex items-start space-x-3">
              <FaExclamationTriangle className="text-amber-500 text-lg mt-1 flex-shrink-0" />
              <div className="text-gray-300 space-y-4">
                <div>
                  <p className="text-white font-semibold text-base leading-relaxed mb-2">
                    This website will be rewritten using Astro.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    No more pure react. New Astro will be Astro with React and more.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This decision was made this month. (2025 August)
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    This current version will no longer receive updates <br />(except for security patches and package updates).
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold text-sm leading-relaxed mb-2">
                    So how about this website?
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The answer is simple. Website will be archived and only receive security patches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="dontShowAgain"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 text-primary bg-gray-700"
              />
              <label htmlFor="dontShowAgain" className="text-gray-200 text-sm cursor-pointer">
                Don't show this message again
              </label>
            </div>
            
            {/* Action button */}
            <button
              onClick={() => {
                if (dontShowAgain) {
                  handleDontShowAgain();
                } else {
                  handleClose();
                }
              }}
              className="w-full bg-primary/80 hover:bg-primary/90 text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
            >
              {dontShowAgain ? 'Got it, don\'t show again' : 'Got it'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MigrationNotification;
