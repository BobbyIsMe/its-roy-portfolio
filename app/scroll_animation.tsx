'use client'
import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ children, className = "", threshold = 0.8}: { children: React.ReactNode; className?: string, threshold? : number}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full opacity-0 ${visible ? 'fadeSlideUp' : ""} ${className}`}
    >
      {children}
    </div>
  );
}