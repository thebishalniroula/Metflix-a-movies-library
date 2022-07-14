import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import image from "../public/socialshareImage.png";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The Movies is a free online movies library built using NextJS and The Movie Database(TMDB) api."
        />
        <meta
          property="og:title"
          content="The Movies Library: Project on NextJS"
        />
        <meta
          property="og:url"
          content="https://movies-library-theta.vercel.app/"
        />
        <meta
          property="og:image"
          content={
            "https://movies-library-theta.vercel.app/socialshareImage.png"
          }
        />
        <link rel="icon" href="/MOVIES.png" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
