import React, { useEffect, useState } from 'react';
import './styles.css';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
      setProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // 初始调用
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return (
    <div className="reading-progress">
      <div 
        className="reading-progress-bar" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}