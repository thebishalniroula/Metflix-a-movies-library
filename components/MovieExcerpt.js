import styles from "../styles/MovieExcerpt.module.css";
const MovieExcerpt = ({ data }) => {
  return (
    <div className={styles.card}>
      <div>
        <h4>Rating</h4>
        <p className={styles.p}>
          *****{` ${data.vote_average} (${data.vote_count} votes)`}
        </p>
      </div>
      <div>
        <h4>Popularity score</h4>
        <p className={styles.p}>{`${data.popularity}`}</p>
      </div>
      <div>
        <h4>Release date</h4>
        <p className={styles.p}>{` ${data.release_date}`}</p>
      </div>
      <div>
        <h4>Runtine</h4>
        {data.runtime ? (
          <p className={styles.p}>{`${data.runtime} minutes`}</p>
        ) : (
          <p className={styles.na}>Not available</p>
        )}
      </div>
      <div>
        <h4>Revenue</h4>
        {data.revenue ? (
          <p className={styles.p}>{`$${data.revenue}`}</p>
        ) : (
          <p className={styles.na}>Not available</p>
        )}
      </div>
      <div>
        <h4>Languages</h4>
        {data.spoken_languages.map((item, index) => {
          if (index === 0) {
            return (
              <span key={index} className={styles.p}>
                {item.english_name}
              </span>
            );
          } else {
            return (
              <span
                key={index}
                className={styles.p}
              >{`, ${item.english_name}`}</span>
            );
          }
        })}
      </div>
      <div>
        <h4>Original language</h4>
        <p className={styles.p}>{`${data.original_language}`}</p>
      </div>
    </div>
  );
};

export default MovieExcerpt;
