"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Testpage() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");

    if (savedCount !== null) {
      try {
        const parsedCount = JSON.parse(savedCount);

        if (Number.isFinite(parsedCount) && parsedCount >= 0) {
          setCount(parsedCount);
        }
      } catch {
        setCount(0);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("count", JSON.stringify(count));
    }
  }, [count, loaded]);

  const incrementByOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementByOne = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }

      return 0;
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.count}>{count}</h2>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={incrementByOne}>
          +
        </button>

        <button className={styles.button} onClick={decrementByOne}>
          -
        </button>
      </div>
    </div>
  );
}
