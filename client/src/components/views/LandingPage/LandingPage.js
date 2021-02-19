import React,{useEffect,useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL,IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';

function LandingPage() {
    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    
    useEffect(() => {
        const endPoint=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetch(endPoint)
        .then(response=>response.json())
        .then(response=>{
            setMovies([response.results]);
            setMainMovieImage(response.results[0]);
        })
    }, [])
    return (
        <div style={{width:'100%' ,margin:'0'}}>
            {MainMovieImage &&
            <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                title={MainMovieImage.original_title}
                text={MainMovieImage.overview}
            />
            }
            <div>
                <h2>Movies by latest</h2>
                <hr />
            </div>
            <div>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default LandingPage
