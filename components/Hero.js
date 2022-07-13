import styles from "../styles/Hero.module.css";
import playicon from "../public/playicon.png";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import genre_map from "../data/genre_ids";
const Hero = ({ data }) => {
  const [playVideo, setPlayVideo] = useState(false);
  if (typeof window !== "undefined") {
    if (playVideo) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
  }
  if (!data?.genres && data.genre_ids) {
    data["genres"] = [];
    data.genre_ids.map((item) => {
      data.genres.push({ name: genre_map[item.toString()], id: item });
    });
  }
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
      }}
    >
      {playVideo && <VideoPlayer id={data.id} setPlayVideo={setPlayVideo} />}
      <div className={styles.overlay}></div>
      <div className={styles.card}>
        <Link href={`/movie/${data.id}`}>
          <div>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>{data.overview}</p>
          </div>
        </Link>
        {data?.genres && (
          <div className={styles.genres}>
            {data.genres.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
        )}
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => {
              window.scrollTo(0, 0);
              setPlayVideo(true);
            }}
          >
            <Image src={playicon} height={16} width={16} />
            <p>Play trailer</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
