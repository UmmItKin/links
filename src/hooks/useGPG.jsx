import { useState, useEffect } from 'react';
import { userData } from '../config/userData';

export const useGPG = () => {
  const [gpgContent, setGPGContent] = useState("");
  const [isGpgLoaded, setIsGpgLoaded] = useState(false);

  const fetchGPGKey = async () => {
    try {
      const response = await fetch(userData.gpg_key);
      if (response.ok) {
        const text = await response.text();
        setGPGContent(text);
        setIsGpgLoaded(true);
      } else {
        console.error("Failed to fetch GPG key:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching GPG key:", error);
    }
  };

  const handleDownload = () => {
    if (!gpgContent) {
      console.error("Cannot download: GPG content is empty");
      return;
    }
    
    const blob = new Blob([gpgContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "UmmIt.gpg";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  useEffect(() => {
    fetchGPGKey();
  }, []);

  return {
    gpgContent,
    isGpgLoaded,
    fetchGPGKey,
    handleDownload
  };
}; 