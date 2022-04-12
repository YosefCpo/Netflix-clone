import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fecthNetflixOriginal}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fecthActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fecthComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fecthHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fecthRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fecthDocumentariesMovies} />
		</div>
	);
}

export default App;
