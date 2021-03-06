import React from 'react'

const Movie = ({image, movieId, viewMovieInfo}) => {
    return (
      <div className="col s12 m6 l3">
          <div className="card"> 
               <div className="card-image waves-effect waves-block waves-light">
                    {
                        image == null ? <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{width: '100%', height:'360' }} /> :
                         <img src={`http://image.tmdb.org/t/p/w185${image}`} alt="card image" style={{width: '100%', height:'360' }}  />
                    }
                    <div className="card-content">
                        <p><a href="#" onClick={() => viewMovieInfo(movieId)} >view Details</a></p>
                    </div>
               </div>
          </div>
      </div>   
    )
}

export default Movie;
