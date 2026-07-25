import { useState, useEffect, useCallback, useRef } from 'react';

// ---- Mouse Position Hook ----
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return position;
}

// ---- Animated Counter Hook ----
export function useAnimatedCounter(target: number, duration: number = 1500, start: boolean = true) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, start]);

  return count;
}

// ---- Window Size Hook ----
export function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}

// ---- Debounce Hook ----
export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// ---- Intersection Observer Hook ----
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

// ---- Spotlight Effect Hook ----
export function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  return { ref, handleMouseMove };
}

// ---- Keyboard Shortcut Hook ----
export function useKeyboardShortcut(key: string, callback: () => void, modifier: 'ctrl' | 'meta' | 'alt' = 'meta') {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const modPressed =
        modifier === 'meta' ? (e.metaKey || e.ctrlKey) :
        modifier === 'ctrl' ? e.ctrlKey :
        e.altKey;

      if (modPressed && e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, callback, modifier]);
}
