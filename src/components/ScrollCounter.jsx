import React, { useEffect, useRef, useState } from "react";

const ScrollCounter = ({ target = 1000, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = target / (duration / 16); // 60fps ~16ms/frame

          const animate = () => {
            start += increment;
            if (start < target) {
              setCount(Math.ceil(start));
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span
      ref={ref}
      className=" text-blue-600"
    >
      {count}+
    </span>
  );
};

export default ScrollCounter;
