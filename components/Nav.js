import Image from "next/image";
import Link from "next/link";
import Movies from "../public/MOVIES.png";
import styles from "../styles/Nav.module.css";
import { useState } from "react";
import { debounce } from "debounce";

const Nav = () => {
  const [results, setResults] = useState([]);
  const fetchSearchResults = debounce(async (searchQuery) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bd6a2026fa1f05b7d0721dfd7fe8d4c5&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      );
      const data = await res.json();
      if (data?.results) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    } catch (error) {
      setResults([]);
    }
  }, 1000);
  return (
    <div>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image src={Movies} height={30} width={30} alt={"logo"} />
            <span>ETFLIX</span>
          </div>
        </Link>

        <div className={styles.links}>
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Tv shows</a>
          <a href="">Web series</a>
          <a href="">Movies</a>
        </div>
        <form className={styles.searchWrapper}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search..."
            onChange={(e) => {
              e.preventDefault();
              fetchSearchResults(e.target.value);
            }}
          />
          <div className={styles.searchResults}>
            {results.map((item, index) => {
              return (
                <Link key={index} href={`/movie/${item.id}`}>
                  <div className={styles.searchResultItem}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        layout="fill"
                        alt="poster"
                      />
                    </div>
                    <div className={styles.searchDetails}>
                      <h5>{`${item.title} (${
                        item?.release_date?.split("-")[0]
                      })`}</h5>
                      <p>
                        <span>{"☆"}</span>
                        <span>{item.vote_average}</span>
                        <span>{`(${item.vote_count} votes)`}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </form>
      </nav>
    </div>
  );
};

export default Nav;
