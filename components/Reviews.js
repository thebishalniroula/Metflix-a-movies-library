import styles from "../styles/Reviews.module.css";
import Image from "next/image";
const Reviews = ({ reviews }) => {
  reviews.map((item) => {
    if (!item.author_details.avatar_path) {
      item.author_details.avatar_path = "http";
    }
  });
  return (
    <div className={styles.reviews}>
      {reviews.length > 0 ? (
        reviews.map((item) => (
          <div key={item.id} className={styles.review}>
            <div>
              <div className={styles.authorDetails}>
                {/*
                <div className={styles.avatarWrapper}> */}
                {!item.author_details.avatar_path.includes("http") ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.author_details.avatar_path}`}
                    height={60}
                    width={60}
                    className={styles.avatar}
                  />
                ) : (
                  <Image
                    src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}
                    height={60}
                    width={60}
                    className={styles.avatar}
                  />
                )}
                {/* </div> */}
                <div>
                  <h4>{item.author}</h4>
                  {"⭐⭐⭐⭐"}
                </div>
              </div>
              <p>{item.content}</p>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.na}>No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
