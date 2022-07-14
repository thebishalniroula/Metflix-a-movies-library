import styles from "../styles/Footer.module.css";
import tmdbLogo from "../public/tmdb.svg";
import nextjsLogo from "../public/NextjsLogo.svg";
import githubLogo from "../public/githubLogo.webp";
import facebookLogo from "../public/facebook.png";
import twitterLogo from "../public/twitter.png";
import github from "../public/git.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.title}>API credit</p>
        <p className={styles.description}>
          All the datas in this website is extracted from TBDB API.
        </p>
        <Link href={"https://tmdb.org"}>
          <div className={styles.footerImage}>
            <Image src={tmdbLogo} height={80} width={80} alt={"TMDB logo"} />
          </div>
        </Link>
      </div>
      <div>
        <p className={styles.title}>Frontend framework</p>
        <p className={styles.description}>
          This website is created using NextJS, a react framwork for production.
        </p>
        <Link href={"https://nextjs.org/"}>
          <div className={styles.footerImage}>
            <Image
              src={nextjsLogo}
              height={60}
              width={100}
              alt={"Nextjs logo"}
            />
          </div>
        </Link>
      </div>
      <div>
        <p className={styles.title}>Github repository</p>
        <p className={styles.description}>
          You can find the source code of this project in{" "}
          <Link
            href={
              "https://github.com/thebishalniroula/movies-library-website-nextjs.git"
            }
          >
            this repository
          </Link>{" "}
          or download it from{" "}
          <Link href="https://github.com/thebishalniroula/movies-library-website-nextjs/archive/refs/heads/main.zip">
            here
          </Link>
        </p>
      </div>
      <div>
        <p className={styles.title}>Copyright</p>
        <p className={styles.description}>
          &#169; Bishal Niroula {date.getFullYear()}
        </p>
        <div className={styles.socialLinks}>
          <Link href={"https://github.com/thebishalniroula/"}>
            <div className={styles.footerImage}>
              <Image src={github} height={40} width={40} alt={"Github logo"} />
            </div>
          </Link>
          <Link href={"https://facebook.com/thebishalniroula"}>
            <div className={styles.footerImage}>
              <Image
                src={facebookLogo}
                height={50}
                width={50}
                alt={"Facebook logo"}
              />
            </div>
          </Link>
          <Link href={"https://twitter.com/thbishalniroula/"}>
            <div className={styles.footerImage}>
              <Image
                src={twitterLogo}
                height={50}
                width={50}
                alt={"Twitter logo"}
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
