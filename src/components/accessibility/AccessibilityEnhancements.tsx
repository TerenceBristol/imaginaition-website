'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

// Accessibility Context for managing focus and announcements
interface AccessibilityContextType {
  announceToScreen: (message: string, priority?: 'polite' | 'assertive') => void;
  setFocusToElement: (elementId: string) => void;
  trapFocus: (containerRef: React.RefObject<HTMLElement>) => () => void;
  restoreFocus: () => void;
  isReducedMotion: boolean;
  highContrastMode: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const announcementTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Screen reader announcements
  const announceToScreen = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Clear previous announcement
    if (announcementTimeoutRef.current) {
      clearTimeout(announcementTimeoutRef.current);
    }

    // Create or update announcement element
    let announcer = document.getElementById('screen-reader-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'screen-reader-announcer';
      announcer.setAttribute('aria-live', priority);
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      document.body.appendChild(announcer);
    }

    // Update aria-live if priority changed
    announcer.setAttribute('aria-live', priority);
    
    // Clear and set new message with slight delay for screen readers
    announcer.textContent = '';
    announcementTimeoutRef.current = setTimeout(() => {
      announcer!.textContent = message;
    }, 100);
  }, []);

  // Focus management
  const setFocusToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  }, []);

  const restoreFocus = useCallback(() => {
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, []);

  // Focus trap utility
  const trapFocus = useCallback((containerRef: React.RefObject<HTMLElement>) => {
    const container = containerRef.current;
    if (!container) return () => {};

    // Store previous focus
    previousFocusRef.current = document.activeElement as HTMLElement;

    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex="0"]'
    );
    
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Set initial focus
    if (firstFocusable) {
      firstFocusable.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      } else if (e.key === 'Escape') {
        // Allow escape to close modals/dialogs
        container.dispatchEvent(new CustomEvent('accessibilityEscape'));
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Detect user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast mode
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setHighContrastMode(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrastMode(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Cleanup announcements on unmount
  useEffect(() => {
    return () => {
      if (announcementTimeoutRef.current) {
        clearTimeout(announcementTimeoutRef.current);
      }
    };
  }, []);

  const value: AccessibilityContextType = {
    announceToScreen,
    setFocusToElement,
    trapFocus,
    restoreFocus,
    isReducedMotion,
    highContrastMode,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

// Skip Links Component
interface SkipLinksProps {
  links: Array<{
    href: string;
    text: string;
  }>;
}

export function SkipLinks({ links }: SkipLinksProps) {
  const { announceToScreen } = useAccessibility();

  const handleSkipLinkFocus = (linkText: string) => {
    announceToScreen(`Skip link: ${linkText}`, 'assertive');
  };

  return (
    <div className="skip-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-[9999] focus:outline-none focus:ring-2 focus:ring-blue-300"
          onFocus={() => handleSkipLinkFocus(link.text)}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

// Heading hierarchy enforcer
interface AccessibleHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AccessibleHeading({ level, children, className = '', id }: AccessibleHeadingProps) {
  const Tag = `h${level}` as const;
  
  return (
    <Tag 
      id={id}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm ${className}`}
      tabIndex={id ? 0 : undefined}
    >
      {children}
    </Tag>
  );
}

// Landmarks component for better navigation
interface LandmarkProps {
  children: React.ReactNode;
  role?: 'main' | 'navigation' | 'banner' | 'contentinfo' | 'complementary' | 'search' | 'form';
  ariaLabel?: string;
  className?: string;
}

export function Landmark({ children, role = 'main', ariaLabel, className = '' }: LandmarkProps) {
  const Tag = role === 'main' ? 'main' : 
              role === 'navigation' ? 'nav' : 
              role === 'banner' ? 'header' : 
              role === 'contentinfo' ? 'footer' : 
              'section';

  return (
    <Tag
      role={role}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </Tag>
  );
}

// Live region for dynamic content announcements
interface LiveRegionProps {
  children: React.ReactNode;
  priority?: 'polite' | 'assertive' | 'off';
  atomic?: boolean;
  className?: string;
}

export function LiveRegion({ children, priority = 'polite', atomic = true, className = '' }: LiveRegionProps) {
  return (
    <div
      aria-live={priority}
      aria-atomic={atomic}
      className={`sr-only ${className}`}
    >
      {children}
    </div>
  );
}

// Enhanced Button with accessibility features
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function AccessibleButton({ 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  loadingText = 'Loading...',
  children,
  disabled,
  className = '',
  ...props 
}: AccessibleButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-busy={isLoading}
      aria-describedby={isLoading ? `${props.id}-loading` : undefined}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {loadingText}
          {isLoading && (
            <span id={`${props.id}-loading`} className="sr-only">
              {loadingText}
            </span>
          )}
        </>
      ) : (
        children
      )}
    </button>
  );
}

// Enhanced form field with accessibility
interface AccessibleFormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AccessibleFormField({
  id,
  label,
  type = 'text',
  required = false,
  error,
  helpText,
  value,
  onChange,
  multiline = false,
  placeholder,
  disabled = false,
  className = ''
}: AccessibleFormFieldProps) {
  const inputClasses = `w-full px-3 py-2 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
    error 
      ? 'border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500' 
      : 'border-gray-300 bg-white hover:border-gray-400'
  } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="space-y-1">
      <label 
        htmlFor={id}
        className={`block text-sm font-medium ${error ? 'text-red-700' : 'text-gray-700'}`}
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">*</span>
        )}
      </label>
      
      <InputComponent
        id={id}
        type={multiline ? undefined : type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={`${id}-description ${error ? `${id}-error` : ''}`}
        rows={multiline ? 4 : undefined}
      />
      
      {helpText && (
        <p id={`${id}-description`} className="text-sm text-gray-600">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// Progress indicator with accessibility
interface AccessibleProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function AccessibleProgress({ 
  value, 
  max = 100, 
  label = 'Progress', 
  showValue = true,
  className = '' 
}: AccessibleProgressProps) {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showValue && (
            <span className="text-sm text-gray-600">{percentage}%</span>
          )}
        </div>
      )}
      <div 
        className="w-full bg-gray-200 rounded-full h-2"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`${label}: ${percentage}% complete`}
      >
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
} 