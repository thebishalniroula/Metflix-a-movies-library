import styles from "../styles/Footer.module.css";
const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p>© Bishal Niroula {date.getYear() + 1900}</p>
      <p>
        {"API credit: "}
        <a href="https://www.themoviedb.org/documentation/api">
          The movie Database(TMDB)
        </a>
      </p>
    </footer>
  );
};

export default Footer;
