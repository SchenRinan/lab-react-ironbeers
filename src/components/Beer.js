import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import './Beer.css';

const Beer = () => {
    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(false);
    const {_id} = useParams();
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id || 'random'}`)
            .then(data =>{
                setBeer(data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err.message);
             });
    },[_id])
    return (
        <div className="Beer">
            {loading ? 
            <div>
                <img src={beer.data.image_url} alt={beer.data.name} />
                <div className="text">
                    <h1>{beer.data.name}<span className="gray">{beer.data.attenuation_level}</span></h1>
                    <h4 className="gray">{beer.data.tagline}<span style={{color: 'black'}}>{beer.data.first_brewed}</span></h4>
                    <p>{beer.data.description}</p>
                    <h4 className='gray'>{beer.data.contributed_by}</h4>
                </div>
            </div> 
            : 'Still Loading...'}
        </div>
    );
}
 
export default Beer;