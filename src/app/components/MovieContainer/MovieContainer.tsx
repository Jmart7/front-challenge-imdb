import styles from "./MovieContainer.module.css";
import Image from "next/image";
import { useState } from "react";

export const MovieContainer = ({ listOfMovies, handleClickMovie } : any) => {

  const handleClick = (imdbID : any) => () => {
    console.log('click movie')
    handleClickMovie(imdbID);
  };

  return (
    <div className={styles.movieContainer}>
      {listOfMovies && listOfMovies.length > 0 ? (
        <div className={styles.imageAndTextContainer}>
          {listOfMovies.slice(0,8).map((movie : any) => {
            return (
              <div className={styles.card} key={movie.imdbID} onClick={handleClick(movie.imdbID)}>
                <a>
                  <Image
                    src={movie.Poster === "N/A" ? "/no-movie.svg" : movie.Poster}
                    alt={movie.Title}
                    className={styles.movieImage}
                    width={200}
                    height={300}
                    priority
                  />
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.noMovieContainer}>
          <div>
            <Image
              src="/no-movie.svg"
              alt="No Movie found"
              className={styles.noMovieLogo}
              width={442}
              height={442}
              priority
            />
          </div>
          <div className={styles.noMovieTitle}>Don&apos;t know what to search?</div>
          <div className={styles.noMovieSubtitle}>Here&apos;s an offer you can&apos;t refuse</div>
        </div>
      )}
    </div>
  );
};