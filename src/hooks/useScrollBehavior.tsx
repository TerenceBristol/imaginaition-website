'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollSection {
  id: string;
  name: string;
  element?: HTMLElement;
}

interface UseScrollBehaviorReturn {
  activeSection: string;
  scrollProgress: number;
  scrollToSection: (sectionId: string, offset?: number) => void;
  isScrolling: boolean;
}

export function useScrollBehavior(sections: ScrollSection[]): UseScrollBehaviorReturn {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Enhanced smooth scroll function with offset support
  const scrollToSection = useCallback((sectionId: string, offset: number = -80) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setIsScrolling(true);
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Calculate target position with offset
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition + offset;

    // Enhanced smooth scroll with easing
    const start = window.pageYOffset;
    const distance = targetPosition - start;
    const duration = Math.min(Math.abs(distance) / 2, 1200); // Dynamic duration with max
    let startTime: number | null = null;

    // Easing function for smooth animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, start + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Mark scrolling as complete after animation
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 100);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  // Setup intersection observer for section detection
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% visible
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (isScrolling) return; // Don't update during programmatic scroll

      let mostVisibleSection = '';
      let maxVisibility = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
          maxVisibility = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, activeSection, isScrolling]);

  // Calculate scroll progress
  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      calculateScrollProgress();
      
      // Update scrolling state
      if (!isScrolling) {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    calculateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  return {
    activeSection,
    scrollProgress,
    scrollToSection,
    isScrolling
  };
} 