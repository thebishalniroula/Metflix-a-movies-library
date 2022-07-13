import Reviews from "./Reviews";
import MovieExcerpt from "./MovieExcerpt";
import styles from "../styles/Details.module.css";
const Details = ({ data, reviews }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Reviews</h2>
        <div className={styles.details}>
          <MovieExcerpt data={data} />
          <Reviews reviews={reviews} />
          <MovieExcerpt data={data} />
        </div>
      </div>
    </>
  );
};

export default Details;
