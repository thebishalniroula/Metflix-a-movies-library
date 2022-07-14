import styles from "../styles/Reviews.module.css";
import Review from "./Review";
const Reviews = ({ reviews }) => {
  reviews.map((item) => {
    if (!item.author_details.avatar_path) {
      item.author_details.avatar_path = "http";
    }
  });

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((item) => <Review key={item.id} item={item} />)
      ) : (
        <p className={styles.na}>No reviews yet.</p>
      )}
    </>
  );
};

export default Reviews;
