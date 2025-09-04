'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          // Trigger animated underline
          element.classList.add('active');
        }
      },
      options
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
}