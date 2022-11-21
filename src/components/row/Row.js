import{useState, useEffect} from "react";
import './Row.css';
import axios from "axios";
import Card from "../card/Card";

const Row=(props)=>{
    const[movies, setMovies] = useState([]);
    const fetchMovies = async () =>{
        const response = await axios.get(props.url);
        setMovies(response.data.results);
    }

    useEffect(()=>{
        fetchMovies();
    },[])
    return <div className="row-wrapper">
        <h3 className="row-title">{props.title}</h3>
        <div className="row-card">
        {movies.map((el)=>{
            return <Card title={el.title} poster={el.backdrop_path} />
        })}
        </div>
        
    </div>
}
export default Row;
