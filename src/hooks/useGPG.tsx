import { useState, useEffect } from 'react';
import { userData } from '../config/userData';

interface GPGHookReturn {
  gpgContent: string;
  isGpgLoaded: boolean;
  fetchGPGKey: () => Promise<void>;
  handleDownload: () => void;
}

export const useGPG = (): GPGHookReturn => {
  const [gpgContent, setGPGContent] = useState<string>("");
  const [isGpgLoaded, setIsGpgLoaded] = useState<boolean>(false);

  const fetchGPGKey = async (): Promise<void> => {
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
      if (error instanceof Error) {
        console.error("Error fetching GPG key:", error.message);
      } else {
        console.error("Error fetching GPG key:", error);
      }
    }
  };

  const handleDownload = (): void => {
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