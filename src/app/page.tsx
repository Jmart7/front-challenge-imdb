'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { TitleContainer } from "./components/TitleContainer/TitleContainer";
import { getMoviesFromSearch, getMoviesFromID } from "./services/movieFetcher";
import { useState, useCallback } from "react";
import { MovieContainer } from "./components/MovieContainer/MovieContainer";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { debounce } from "lodash";

export default function Home() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [showMovieDetails, setShowMovieDetails] = useState([null, false]);
  const [movieData, setMovieData] = useState(null);

  const debouncedSearch = useCallback(debounce(async (value : string) => {
    try {
      const data = await getMoviesFromSearch(value);
      setListOfMovies(data);
    } catch (error) {
      console.error(error);
    }
  }, 500), []);

  const handleSearch = (event : any) => {
    const value = event.target.value;
    debouncedSearch(value);
  };


  const handleClickMovie = async (imdbID : any) => {
    try {
      const data = await getMoviesFromID(imdbID);
      setMovieData(data);
      setShowMovieDetails([imdbID, true]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickBack = () => {
    setShowMovieDetails([null, false]);
    setMovieData(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.bodyContainer}>
        <div className={styles.titleContainer}>
          <Image
            src="/tv.svg"
            alt="TV"
            className={styles.vercelLogo}
            width={50}
            height={50}
            priority
          />
          <TitleContainer title="MovieBox" />
        </div>
        { !showMovieDetails[1] || !movieData ? (
          <>
            <SearchInput placeholder="Search movies" onChange={handleSearch}/>
            <MovieContainer listOfMovies={listOfMovies} handleClickMovie={handleClickMovie}/>
          </>
        ) : (
          <MovieDetail movieData={movieData} handleClickBack={handleClickBack}/>
        )
        }
      </div>
    </main>
  );
}