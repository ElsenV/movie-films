import React from "react";
import { getMovie } from "@/services/movie";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";

async function MooviePage({ params, searchParams }) {
  const movieDetails = await getMovie(params.id);

  if (!movieDetails) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Movie Page error ");
  }
  return <MovieContainer movie={movieDetails} />;
}

export default MooviePage;
