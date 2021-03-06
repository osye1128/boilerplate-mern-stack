
import React,{useEffect,useState} from 'react';
import {API_KEY, API_URL,IMAGE_BASE_URL} from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import {Row} from 'antd';
import GridCards from '../commons/GridCards';
import Favoite from './Sections/Favoite';



function MovieDetail(props) {

  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);

  let movieId =props.match.params.movieId
  useEffect(() => {

    let endPointCrew =`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endPointInfo).then(response => response.json())
    .then(response=>{
      
      setMovie(response)
    })
    
  

  fetch(endPointCrew).then(response => response.json())
    .then(response=>{
      
      setCasts(response.cast)
    });
    
  }, [])

  const onActorToggle=()=>{
    setActorToggle(!ActorToggle)
  }
  return (
    <div>
  <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />
            
    

    <div style={{width:'85%', margin:'1rem auto'}}>
      
    <div style={{display:'flex' ,justifyContent:'flex-end'}}>
      <Favoite movieInfo={Movie} userfrom={localStorage.getItem('userId')}
              movieId={movieId}/>
    </div>

      <MovieInfo 
        movie={Movie}
      />
    <br />
    <div style={{display:'flex',justifyItems:'center',margin:'2rem'}}>
        <button onClick={onActorToggle}>Toggle Actor View</button>
      </div>

    {ActorToggle &&
        <Row gutter={[16, 16]} >

        {Casts && Casts.map((cast, index) => (
            <React.Fragment key={index}>
                <GridCards
                    
                    image={cast.profile_path ?
                        `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                    
                    charactorName={cast.name}
                />
            </React.Fragment>
        ))}

    </Row>    
    }
       
    </div>
    </div>
  )
}

export default MovieDetail
