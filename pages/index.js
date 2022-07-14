import Head from "next/head";
import React from "react";
import Slider from "../components/Slider";
import Hero from "../components/Hero";

function Home({ nowPlaying, popular, topRated, upcoming, random }) {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta
          name="description"
          content="This is a project done by Bishal in Next js."
        />
        <link rel="icon" href="/MOVIES.png" />
      </Head>
      <Hero data={random} />
      <Slider data={nowPlaying} title={"Now playing"} />
      <Slider data={popular} title={"Popular"} />
      <Slider data={topRated} title={"Top rated"} />
      <Slider data={upcoming} title={"Upcoming"} />
    </>
  );
}
export async function getStaticProps() {
  const resNP = await fetch(`
  https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const dataNP = await resNP.json();

  const resPop = await fetch(`
  https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const dataPop = await resPop.json();

  const resTR = await fetch(`
  https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const dataTR = await resTR.json();

  const resUpCom = await fetch(`
  https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const dataUpCom = await resUpCom.json();

  const resRandom = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const dataRandom = await resRandom.json();
  return {
    props: {
      nowPlaying: dataNP.results,
      popular: dataPop.results,
      topRated: dataTR.results,
      upcoming: dataUpCom.results,
      random: dataRandom.results[parseInt(Math.random() * 20)],
    },
  };
}
export default Home;
