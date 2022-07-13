import Hero from "../../components/Hero";
import Details from "../../components/Details";
import Cast from "../../components/Cast";
import Slider from "../../components/Slider";
import Head from "next/head";
const movieDetail = ({ data, reviews, similarMovies, cast }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="This is a project done by Bishal." />
        <link rel="icon" href="/MOVIES.png" />
      </Head>
      <Hero data={data} />
      <Cast cast={cast} />
      <Details data={data} reviews={reviews} />
      <Slider data={similarMovies} title={"Similar movies"} />
    </>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const data = await res.json();

  const resReviewws = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const dataReviews = await resReviewws.json();

  const resSM = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const dataSM = await resSM.json();

  const resCast = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const dataCast = await resCast.json();
  return {
    props: {
      data: data,
      reviews: dataReviews.results,
      similarMovies: dataSM.results,
      cast: dataCast.cast,
    },
  };
}
export default movieDetail;
