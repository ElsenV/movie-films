import HomeConteiner from "@/containers/home";
import {
  getSingleCategory,
  getCategories,
  getTopRateMovies,
  getPoularMovies,
} from "@/services/movie";

async function Home({ params }) {
  let selectedCategory;
  const [
    { results: topRated },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getTopRateMovies(),
    getPoularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeConteiner
      topRated={topRated}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movie: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
export default Home;
