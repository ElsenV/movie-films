import React from "react";

import FeaturedMovie from "@/components/featured-movies";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeConteiner({
  topRated = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRated?.[1]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movie.length > 0 && (
        <MoviesSection
          title={categories.find(
            (genre) => genre.id === Number(selectedCategory.id).name
          )}
          movies={selectedCategory.movie}
        />
      )}
      <MoviesSection title="Poular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection title="Your Favoruite" movies={topRated.slice(7, 13)} />
    </div>
  );
}

export default HomeConteiner;
