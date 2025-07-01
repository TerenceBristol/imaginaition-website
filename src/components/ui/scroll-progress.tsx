'use client';

import React from 'react';

interface ScrollProgressProps {
  progress: number;
  isScrolling?: boolean;
  className?: string;
}

export function ScrollProgress({ progress, isScrolling = false, className = '' }: ScrollProgressProps) {
  return (
    <>
      {/* Top Progress Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 z-50 transform origin-left transition-all duration-200 ${className}`}
        style={{ 
          transform: `scaleX(${progress})`,
          opacity: isScrolling ? 1 : 0.7
        }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
      
      {/* Subtle glow effect when scrolling */}
      {isScrolling && (
        <div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/30 via-blue-300/30 to-blue-500/30 z-40 animate-pulse"
        />
      )}
    </>
  );
}

interface ScrollToTopProps {
  scrollProgress: number;
  onScrollToTop: () => void;
  isVisible?: boolean;
}

export function ScrollToTop({ scrollProgress, onScrollToTop, isVisible = true }: ScrollToTopProps) {
  const shouldShow = scrollProgress > 0.2 && isVisible;

  return (
    <button
      onClick={onScrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform ${
        shouldShow 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      role="button"
    >
      {/* Circular progress ring */}
      <div className="absolute inset-0 -rotate-90">
        <svg className="w-full h-full" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 16}`}
            strokeDashoffset={`${2 * Math.PI * 16 * (1 - scrollProgress)}`}
            className="transition-all duration-200"
          />
        </svg>
      </div>
      
      {/* Arrow icon */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </div>
    </button>
  );
} 