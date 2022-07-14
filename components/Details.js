import Reviews from "./Reviews";
import MovieExcerpt from "./MovieExcerpt";
import styles from "../styles/Details.module.css";
const Details = ({ data, reviews }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Reviews</h2>
        <div className={styles.details}>
          <div className={`${styles.card} ${styles.firstCard}`}>
            <MovieExcerpt data={data} />
          </div>
          <div className={styles.reviewsCard}>
            <Reviews reviews={reviews} />
          </div>
          <div className={`${styles.card} ${styles.lastCard}`}>
            <MovieExcerpt data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
