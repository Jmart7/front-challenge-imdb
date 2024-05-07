import Image from "next/image";
import styles from "./MovieDetail.module.css";
import { MovieComments } from "../MovieComments/MovieComments";

export const MovieDetail = ({ movieData, handleClickBack }) => {
  if (!movieData) return <div>Loading...</div>;

  const renderList = (data : string, className : string) =>
    data.split(", ").map((item, index) => (
      <div key={index} className={className}>
        {item}
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.backButton} onClick={handleClickBack}>
        <i className="fa fa-arrow-left"></i>
      </div>
      <div className={styles.movieHeader}>
        <Image
          src={movieData.Poster}
          alt={movieData.Title}
          className={styles.poster}
          width={377}
          height={567}
        />
        <div className={styles.movieInfo}>
          <h1 className={styles.movieDataTitle}>{movieData.Title}</h1>
          <span className={styles.belowTitleInfo}>
            {movieData.Runtime} - {movieData.Year} - {movieData.Rated}
          </span>
          <div className={styles.criticReview}>
            <Image src="/imdb-icon.svg" alt="IMDB" width={64} height={32} />
            <div className={styles.reviewValue}>{movieData.Ratings[0].Value}</div>
          </div>
          <div>
            <div className={styles.graySubtitle}>Overview</div>
            <p>{movieData.Plot}</p>
          </div>
          <div className={styles.castColumns}>
            <div>
              <div className={styles.graySubtitle}>Cast</div>
              <div className={styles.actors}>
                {renderList(movieData.Actors, styles.actorItem)}
              </div>
            </div>
            <div>
              <div className={styles.graySubtitle}>Genre</div>
              <div className={styles.genre}>
                {renderList(movieData.Genre, styles.genreItem)}
              </div>
            </div>
            <div>
              <div className={styles.graySubtitle}>Director</div>
              <div className={styles.director}>
                {renderList(movieData.Director, styles.directorItem)}
              </div>
            </div>
            <div>
              <div className={styles.graySubtitle}>Writer</div>
              <div className={styles.writers}>
                {renderList(movieData.Writer, styles.writerItem)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieComments imdbID={movieData.imdbID} />
    </div>
  );
};
