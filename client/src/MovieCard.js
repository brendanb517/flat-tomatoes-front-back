export default function MovieCard({movie}) {
   const { name, poster, year } = movie;
    
   return(
        <li className="card">
            <picture>
                <img src={poster} alt={name} />
            </picture>
            <h4>{name}</h4>
            <p>Release: {year}</p>
        </li>
        );
    }

        
        
