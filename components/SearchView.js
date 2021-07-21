import Hero from "./Hero";
import { Link } from "react-router-dom";
import ErrorView from "./ErrorView";




const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    const missingPoster =`https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg`
   

    function RenderPoster() {
        if (movie.poster_path == null) {
            return (
                <img
                    src={missingPoster}
                    className='card-img-top my-5 py-2 mh-100'
                    alt={movie.original_title}
                    
                />
            )
        } else {
            return (
                <img
                    src={posterUrl}
                    className='card-img-top mh-100'
                    alt={movie.original_title}
                />
            );
        }
    
        }
    
        return (
            <div className='col-lg-3 col-md-3 col-2 my-4'>
                <div className='card' style={{ width: 'auto', height: '550px' }}>
                    <RenderPoster />						  
                    <div className='card-body'>
                        <h5 className='card-title'>{movie.original_title} </h5>
                        <Link to={detailUrl} className='btn btn-primary'>
                            Show details
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
 


const SearchView = ({ keyword, searchResults }) => {
  const title = `You are now searching for...${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  });

  const RenderSearchResult = () => {
    if (searchResults.length > 0) {
        return (
            <div className='container'>
                <div className='row'>{resultsHtml}</div>
            </div>
        )
    } else {
        return (
            <ErrorView />
        );
    }
}

return (
    <>
        <Hero text={title} />
        <RenderSearchResult />
    </>
);
};

export default SearchView;
