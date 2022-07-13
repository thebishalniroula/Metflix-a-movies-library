import styles from "../styles/Slider.module.css";
import star from "../public/star.png";
import Image from "next/image";

const SliderCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.iconWrapper}>
          <Image src={star} height={15} width={15} className={styles.star} />
          <span className={styles.rating}>{item.vote_average}</span>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          layout="fill"
          className={styles.cardImage}
        />
      </div>
      <h6>{item.title}</h6>
    </div>
  );
};

export default SliderCard;
