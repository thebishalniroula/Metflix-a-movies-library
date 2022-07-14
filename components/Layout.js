import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import image from "../public/socialshareImage.png";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="The Movies Library: Project on NextJS"
        />
        <meta
          property="og:url"
          content="https://movies-library-theta.vercel.app/"
        />
        <meta property="og:image" content={image} />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
