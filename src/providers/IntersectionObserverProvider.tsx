import React, { useEffect, useState, useRef, useCallback, ReactNode, createContext } from 'react';

interface ObserverEntry {
  target: HTMLElement;
  isIntersecting: boolean;
}

interface IntersectionObserverContextType {
  register: (node: HTMLElement, callback: (entry: ObserverEntry) => void) => void;
  unregister: (node: HTMLElement) => void;
}

const IntersectionObserverContext = createContext<IntersectionObserverContextType | null>(null);

interface IntersectionObserverProviderProps {
  children: ReactNode;
}

export const IntersectionObserverProvider: React.FC<IntersectionObserverProviderProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsMap = useRef<Map<HTMLElement, (entry: ObserverEntry) => void>>(new Map());

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
    
      const callback = elementsMap.current.get(entry.target as HTMLElement);
      if (callback) {
        callback({
          target: entry.target as HTMLElement,
          isIntersecting: entry.isIntersecting,
        });
      }
    });
  }, []);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '0px',
      });
    }
  
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();  // Clean up observer on unmount
      }
    };
  }, [handleIntersection]);

  const register = useCallback((node: HTMLElement, callback: (entry: ObserverEntry) => void) => {
    if (observerRef.current && node) {
      observerRef.current.observe(node);
      elementsMap.current.set(node, callback);
    }
  }, []);

  const unregister = useCallback((node: HTMLElement) => {
    if (observerRef.current && node) {
      observerRef.current.unobserve(node);
      elementsMap.current.delete(node);
    }
  }, []);

  return (
    <IntersectionObserverContext.Provider value={{ register, unregister }}>
      {children}
    </IntersectionObserverContext.Provider>
  ); 
};

export const useIntersectionObserver = (): IntersectionObserverContextType => {
  const context = React.useContext(IntersectionObserverContext);
  if (!context) {
    throw new Error('useIntersectionObserver must be used within an IntersectionObserverProvider');
  }
  return context;
};
