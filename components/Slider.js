import styles from "../styles/Slider.module.css";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import SliderCard from "./SliderCard";

const Slider = ({ data, title }) => {
  const [showRightButton, setShowRightButton] = useState(true);
  const elementRef = useRef(null);

  const lastItem = useCallback((node) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowRightButton(false);
          } else {
            setShowRightButton(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (node) {
      observer.observe(node);
    }
  });

  const scroll = (scrollOffset) => {
    elementRef.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.container} ref={elementRef}>
          {data.map((item, index) => {
            if (index === data.length - 1) {
              return (
                <Link key={item.id} href={`/movie/${item.id}`}>
                  <div ref={lastItem}>
                    <SliderCard item={item} />
                  </div>
                </Link>
              );
            } else
              return (
                <Link key={item.id} href={`/movie/${item.id}`}>
                  <div>
                    <SliderCard item={item} />
                  </div>
                </Link>
              );
          })}
          {showRightButton && (
            <button
              className={styles.scrollBtnRight}
              onClick={() => {
                scroll(elementRef.current.offsetWidth - 100);
              }}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;
