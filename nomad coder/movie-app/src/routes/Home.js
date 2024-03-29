import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    // [data, data를 수정할 수 있는 function]
  // function을 실행하면 component 다시 렌더링 됨.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
      getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1> 
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}
              />
            ))}
          </div>
        )}
    </div>
  );
}

export default Home;