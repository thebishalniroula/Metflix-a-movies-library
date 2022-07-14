import { useEffect, useState, useRef } from "react";
import styles from "../styles/Cast.module.css";
import Image from "next/image";
import person from "../public/person.png";

const Cast = ({ cast: casts }) => {
  const allCast = useRef(casts);
  const castContainer = useRef();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    setCast(allCast.current.slice(0, calculateItemsInaRow() * 2));
  }, []);
  const calculateItemsInaRow = () => {
    const items = parseInt(
      (castContainer.current.clientWidth / 16 + 1.25) / (9.375 + 1.25)
    );
    return items;
  };

  const showMoreClickHandler = () => {
    setCast((prev) => [
      ...prev,
      ...allCast.current.slice(
        prev.length,
        prev.length + calculateItemsInaRow() * 2
      ),
    ]);
  };
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Cast</h2>
        <div className={styles.cast} ref={castContainer}>
          {cast.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.imageWrapper}>
                  {item.profile_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                      layout="fill"
                      alt={"profile photo"}
                    />
                  ) : (
                    <Image
                      src={person}
                      layout="fill"
                      alt={"profile photo placeholder"}
                    />
                  )}
                </div>
                <p key={index}>{item.name}</p>
              </div>
            );
          })}
        </div>
        {cast.length < allCast.current.length && (
          <p className={styles.showmore} onClick={showMoreClickHandler}>
            Show more <span>&rarr;</span>
          </p>
        )}
      </div>
    </>
  );
};

export default Cast;
