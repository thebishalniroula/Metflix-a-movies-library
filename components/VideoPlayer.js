import styles from "../styles/VideoPlayer.module.css";
import { useEffect, useState } from "react";

const Video = ({ videos, setPlayVideo }) => {
  const [key, setKey] = useState("");
  useEffect(() => {
    videos.results.map((item) => {
      if (item.type === "Trailer") {
        setKey(item.key);
      }
    });
  }, []);

  return (
    <div
      className={styles.videoContainer}
      onClick={() => {
        setPlayVideo(false);
      }}
    >
      <div className={styles.iframeContainer}>
        {key ? (
          <iframe
            src={`https://www.youtube.com/embed/${key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            frameBorder="0"
            allowFullScreen
            title="Embeded video"
          ></iframe>
        ) : (
          "Video unavailable."
        )}
      </div>
    </div>
  );
};

export default Video;
