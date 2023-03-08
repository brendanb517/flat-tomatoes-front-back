export default function MovieCard({movie, setFeaturedMovie}) {
    function handleClick () {
      fetch (`http://localhost:3000/movies/${movie.id}`)
      .then(r=>r.json())
      .then(m => setFeaturedMovie(m))
    }
     return(
      <div >
      <ul className="pic-ctn" onClick={handleClick} >
          <li className="moviecard"  >
               <img src={movie.poster} />
          </li>
          </ul>
          </div>
          );
      }
        
