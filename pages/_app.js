import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <Layout>
      {loading && <LoadingAnimation />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
