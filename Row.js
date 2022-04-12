import React, {useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

let base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
	let [movies, setMovies] = useState([]);
	let [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			let request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	let opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	let handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
				.then((url) => {
					let urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row-posters">
				{movies.map((movie) => {
					return (
						<img
							onClick={() => {
								handleClick(movie);
							}}
							key={movie.id}
							className={`row-poster ${isLargeRow && "row-poster-large"}`}
							src={`${base_url}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					);
				})}
			</div>

			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;
