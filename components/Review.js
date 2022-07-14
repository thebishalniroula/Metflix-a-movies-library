import styles from "../styles/Review.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Rating } from "react-simple-star-rating";

const Review = ({ item }) => {
  console.log(item);
  const [showShowMore, setShowShowMore] = useState(true);
  const reviewRef = useRef(null);
  useEffect(() => {
    if (reviewRef.current) {
      const node = reviewRef.current;
      console.log(node);
      console.log("clientHeight", node.clientHeight);
      console.log("scrollHeight", node.scrollHeight);
      if (node.clientHeight == node.scrollHeight) {
        setShowShowMore(false);
        console.log("clientHeight", node.clientHeight);
        console.log("scrollHeight", node.scrollHeight);
      }
    }
  });
  return (
    <>
      <div className={styles.review}>
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
                alt="profile photo"
              />
            ) : (
              <Image
                src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}
                height={60}
                width={60}
                className={styles.avatar}
                alt="profile photo"
              />
            )}

            <div>
              <h4>{item.author}</h4>
              {item.author_details.rating && (
                <Rating
                  initialValue={item.author_details.rating}
                  iconsCount={10}
                  readOnly={true}
                  fillColor="#ffcd17"
                  emptyColor="#a8a8a5"
                  allowHover={false}
                  size={20}
                  className={styles.starRating}
                />
              )}
              {item.author_details.rating ? (
                <span>{`(${item.author_details.rating} stars)`}</span>
              ) : (
                <span className={styles.na}>{`Rating not availabe.`}</span>
              )}
            </div>
          </div>
          <p
            ref={reviewRef}
            className={`${styles.reviewContent} ${
              showShowMore ? styles.truncate : ""
            }`}
          >
            {item.content}
          </p>
          {showShowMore && (
            <span
              className={styles.showMore}
              onClick={() => {
                setShowShowMore(false);
              }}
            >
              Show more
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
