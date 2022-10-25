import { useState, useEffect, useMemo } from 'react';

export default function useTimer() {
  const [initialTime] = useState(+new Date());
  const [time, setTime] = useState(+new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(+new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const deltaTime = useMemo(() => {
    return time - initialTime;
  }, [initialTime, time]);

  return Math.round(deltaTime / 1000);
}
