'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { PortfolioItem } from '@/types';
import { Button } from '@/components/ui/button';

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  autoPlay?: boolean;
  className?: string;
}

// Enhanced loading states (for future implementation)
// type LoadingState = 'initial' | 'loading' | 'loaded' | 'error';

// interface ImageLoadState {
//   [key: string]: LoadingState;
// }

export function PortfolioCarousel({ items, autoPlay = false, className = '' }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  // const [imageLoadStates, setImageLoadStates] = useState<ImageLoadState>({});
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0])); // Start with first item visible
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Memoized items for performance
  const memoizedItems = useMemo(() => items, [items]);

  // Enhanced lazy loading with intersection observer
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const observerOptions: IntersectionObserverInit = {
      root: scrollContainerRef.current,
      rootMargin: '50px', // Load images 50px before they come into view
      threshold: 0.1
    };

    intersectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set([...prev, index]));
          
          // Preload adjacent images for smooth navigation
          const preloadIndices = [
            Math.max(0, index - 1),
            index,
            Math.min(memoizedItems.length - 1, index + 1)
          ];
          
          preloadIndices.forEach(i => {
            if (i >= 0 && i < memoizedItems.length) {
              setVisibleItems(prev => new Set([...prev, i]));
            }
          });
        }
      });
    }, observerOptions);

    // Observe all carousel items
    itemRefs.current.forEach((ref, index) => {
      if (ref && intersectionObserverRef.current) {
        ref.setAttribute('data-index', index.toString());
        intersectionObserverRef.current.observe(ref);
      }
    });

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, [memoizedItems.length]);

  // Image loading management (for future implementation)
  // const handleImageLoad = useCallback((itemId: string) => {
  //   setImageLoadStates(prev => ({
  //     ...prev,
  //     [itemId]: 'loaded'
  //   }));
  // }, []);

  // const handleImageError = useCallback((itemId: string) => {
  //   setImageLoadStates(prev => ({
  //     ...prev,
  //     [itemId]: 'error'
  //   }));
  // }, []);

  // const startImageLoad = useCallback((itemId: string) => {
  //   setImageLoadStates(prev => ({
  //     ...prev,
  //     [itemId]: 'loading'
  //   }));
  // }, []);

  // Enhanced navigation with performance optimizations
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Ensure the target slide is marked as visible for loading
    setVisibleItems(prev => new Set([...prev, index]));
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = index * container.offsetWidth;
      
      // Use requestAnimationFrame for smooth scrolling
      const smoothScroll = () => {
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      };
      
      requestAnimationFrame(smoothScroll);
    }

    // Optimized transition timing
    setTimeout(() => setIsTransitioning(false), 200);
  }, [currentIndex, isTransitioning]);

  const goToNext = useCallback(() => {
    const nextIndex = currentIndex === memoizedItems.length - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  }, [currentIndex, memoizedItems.length, goToSlide]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? memoizedItems.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, memoizedItems.length, goToSlide]);

  // Enhanced touch handling with improved performance
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const distance = touchStartRef.current - touchEndRef.current;
    const threshold = window.innerWidth < 640 ? 30 : 50;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    touchStartRef.current = 0;
    touchEndRef.current = 0;
  }, [goToNext, goToPrevious]);

  // Auto-play with performance considerations
  useEffect(() => {
    if (!autoPlay || isTransitioning) return;

    const interval = setInterval(() => {
      if (!document.hidden) { // Pause when tab is not visible
        goToNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, isTransitioning, goToNext]);

  // Keyboard navigation with performance optimizations
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target !== document.body) return; // Only handle when no input is focused
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key) - 1;
        if (index < memoizedItems.length) {
          e.preventDefault();
          goToSlide(index);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, goToSlide, memoizedItems.length]);

  // Initial loading simulation with performance awareness
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 800); // Reduced initial loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  // Performance-aware scroll sync
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollLeft = container.scrollLeft;
          const itemWidth = container.offsetWidth;
          const newIndex = Math.round(scrollLeft / itemWidth);
          
          if (newIndex !== currentIndex && !isTransitioning) {
            setCurrentIndex(newIndex);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, isTransitioning]);

  if (!memoizedItems || memoizedItems.length === 0) {
    return (
      <div className="w-full h-64 sm:h-72 lg:h-80 bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-gray-400 text-xs sm:text-sm mb-2">NO PORTFOLIO ITEMS</div>
          <div className="text-white font-montserrat font-medium text-sm sm:text-base">Portfolio coming soon...</div>
        </div>
      </div>
    );
  }

  // Enhanced loading state with better performance
  if (isInitialLoad) {
    return (
      <div className={`relative w-full group ${className}`}>
        <div className="flex overflow-hidden rounded-lg">
          <div className="flex-none w-full">
            <div className="relative h-64 sm:h-72 lg:h-80 bg-gray-800 border-2 border-gray-600 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin mb-4"></div>
                    <div className="text-gray-400 text-sm">Loading portfolio...</div>
                    <div className="text-gray-500 text-xs mt-1">{memoizedItems.length} items</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced skeleton dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {memoizedItems.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"
              style={{ animationDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
        
        {/* Skeleton counter */}
        <div className="text-center mt-3">
          <div className="h-4 bg-gray-600 rounded w-32 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full group ${className}`}>
      {/* Enhanced Carousel Container with Performance Optimizations */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory rounded-lg"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          touchAction: 'pan-x pinch-zoom' // Better touch performance
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
                 {memoizedItems.map((item, index) => {
           const isVisible = visibleItems.has(index);
           // const loadState = imageLoadStates[item.id] || 'initial';
           const shouldLoad = isVisible || Math.abs(index - currentIndex) <= 1; // Load current and adjacent

          return (
            <div
              key={item.id}
              ref={el => { itemRefs.current[index] = el; }}
              className="flex-none w-full snap-start"
              data-index={index}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 bg-gray-800 border-2 border-gray-600 rounded-lg overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
                {/* Enhanced Image Container with Lazy Loading */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
                  {shouldLoad ? (
                    <div className="text-center p-4 sm:p-6 relative">
                      {/* Loading indicator for individual items (future implementation) */}
                      {/* {loadState === 'loading' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm">
                          <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
                        </div>
                      )} */}
                      
                      <div className="text-blue-400 text-xs sm:text-sm mb-1 sm:mb-2 uppercase tracking-wide">
                        {item.serviceType} Portfolio
                      </div>
                      <div className="text-white font-montserrat font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
                        {item.title}
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm px-2">
                        {item.description}
                      </div>
                      <div className="mt-2 sm:mt-4 text-xs text-gray-400">
                        Image {index + 1} of {memoizedItems.length}
                      </div>
                      
                      {/* Performance indicator */}
                      {index === currentIndex && (
                        <div className="absolute top-2 right-2 text-xs text-blue-400/60">
                          ● Live
                        </div>
                      )}
                    </div>
                  ) : (
                    // Placeholder for non-visible items
                    <div className="text-center p-4 sm:p-6 opacity-50">
                      <div className="text-gray-500 text-xs sm:text-sm mb-1 uppercase tracking-wide">
                        {item.serviceType}
                      </div>
                      <div className="text-gray-400 font-montserrat font-medium text-base sm:text-lg">
                        Loading...
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced hover overlay with performance */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto">
                  <div className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                    Portfolio Example {index + 1}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Navigation Arrows with Better Performance */}
      <Button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 border border-gray-600 hover:border-blue-500 backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-30 will-change-transform"
        style={{ touchAction: 'manipulation' }}
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>

      <Button
        onClick={goToNext}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 border border-gray-600 hover:border-blue-500 backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-30 will-change-transform"
        style={{ touchAction: 'manipulation' }}
        aria-label="Next image"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      {/* Enhanced Dots Navigation with Performance */}
      <div className="flex justify-center space-x-2 sm:space-x-2 mt-4">
        {memoizedItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`rounded-full transition-all duration-200 will-change-transform min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center ${
              index === currentIndex 
                ? 'w-11 h-11 sm:w-8 sm:h-2 bg-blue-400 sm:bg-blue-400' 
                : 'w-11 h-11 sm:w-2 sm:h-2 bg-gray-600 hover:bg-gray-500'
            }`}
            style={{ touchAction: 'manipulation' }}
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          >
            <div className={`rounded-full ${
              index === currentIndex 
                ? 'w-3 h-3 sm:w-full sm:h-full bg-blue-400 sm:bg-transparent' 
                : 'w-2 h-2 sm:w-full sm:h-full bg-gray-400 sm:bg-gray-600'
            }`} />
          </button>
        ))}
      </div>

      {/* Enhanced Portfolio Counter with Performance Info */}
      <div className="text-center mt-3">
        <span className="text-xs sm:text-sm text-gray-400">
          <span className="hidden sm:inline">
            {currentIndex + 1} of {memoizedItems.length} portfolio examples
          </span>
          <span className="sm:hidden">{currentIndex + 1} / {memoizedItems.length}</span>
          {process.env.NODE_ENV === 'development' && (
            <span className="ml-2 text-xs text-blue-400/60">
              ({visibleItems.size} loaded)
            </span>
          )}
        </span>
      </div>
    </div>
  );
} 