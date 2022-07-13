import styles from "../styles/VideoPlayer.module.css";
import { useEffect, useState } from "react";
const Video = ({ id, setPlayVideo }) => {
  const [key, setKey] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`
      );
      const data = await res.json();
      data.results.map((item) => {
        if (item.type === "Trailer") {
          setKey(item.key);
        }
      });
    })();
  }, []);

  return (
    <div
      className={styles.videoContainer}
      onClick={() => {
        setPlayVideo(false);
      }}
    >
      <div className={styles.iframeContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          frameborder="0"
          allowFullScreen
          title="Embeded video"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
