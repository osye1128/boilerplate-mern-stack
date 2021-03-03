import React,{useEffect} from 'react';
import Axios from 'axios';

function Favoite(props) {
  useEffect(() => {
      const userFrom=props.userFrom;
      const movieId=props.movieId;
      const movieTitle=props.movieInfo.title;
      const moviePost=props.movieInfo.backdrop_path;
      const movieRunTime=props.movieInfo.runtime;

      let variables={
        userFrom,
        movieId
      }
      Axios.post('/api/favoite/favoiteNumber',variables)
      .then(response=>{
        if(response.data.success){
          
        }else{
          alert('숫자 정보를 가져오는데 실패했습니다.')
        }
      })
  }, [])
  return (
    <div>
      <button>Favoite</button>  
    </div>
  )
}

export default Favoite
