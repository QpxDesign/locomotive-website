import React, { useState, useEffect, useRef } from "react";

interface TickerProps {
  headlineNumber: number;
  subtext: string;
}
export default function Ticker(props: TickerProps) {
  const tickerRef = useRef<any>(null);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const STEPS_COUNT = 10;
    var index = 0;
    const interval = setInterval(() => {
      var isInView = false;
      if (tickerRef.current !== null) {
        const div = tickerRef.current;
        if (div) {
          const top = div.getBoundingClientRect().top;
          const offset = 200;
          isInView = top + 200 >= 0 && top - offset <= window.innerHeight;
        }
      }
      if (value < props.headlineNumber && isInView) {
        if (
          Math.floor(props.headlineNumber / STEPS_COUNT) * index >
          props.headlineNumber
        ) {
          setValue(props.headlineNumber);
        } else {
          setValue(Math.floor(props.headlineNumber / STEPS_COUNT) * index);
          index++;
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="full-center vstack" ref={tickerRef}>
      <h1>{value.toLocaleString()}+</h1>
      <h2>{props.subtext}</h2>
    </div>
  );
}
