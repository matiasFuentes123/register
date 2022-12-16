import { useCallback, useEffect, useState } from "react";



export const useCount = () => {
  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (count % 2 === 0) {
      setTitle("Es par");
    }
    if (count % 2 !== 0) {
      setTitle("Es impar");
    }
  }, [count]);

  const agregar = () => {
    setCount(count + 1);
  };

  const restar = useCallback(() => {
    setCount(count - 1);
  }, []);

  return {
    count,
    title,
    agregar,
    restar,
  };
};
