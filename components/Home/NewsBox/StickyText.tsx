import React, { useState, useEffect, useRef } from 'react';

const StickyText: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<string>('relative');
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        setStickyClass('hidden');
      } else {
        // Scrolling up
        setStickyClass('fixed top-[50px] left-[360px] z-50');
      }
      prevScrollY.current = currentScrollY;
    };

    const debouncedHandleScroll = debounce(handleScroll, 100); // Change the debounce timeout to 100ms

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  // Debounce helper function
  function debounce<T extends (...args: any[]) => any>(func: T, timeout: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  }

  return <div className={`h-16 w-[300px] bg-gray-200 ${stickyClass}`}>Navbar</div>;
};

export default StickyText;

