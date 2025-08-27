import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingEffectProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 2000,
  loop = true,
  className = ""
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed>();

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span ref={el} className={className} />;
};

export default TypingEffect;
