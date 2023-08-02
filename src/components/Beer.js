import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";

const Beer = () => {
    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(false);
    const {_id} = useParams();
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
            .then(data =>{
                setLoading(true)
                setBeer(data);
            })
            .catch((err) => {
                console.log(err.message);
             });
    },[_id])
    return (
        <div className="Beer">
            {loading ? 
            <div>{beer.data.name}</div>
            : 'Still Loading...'}
        </div>
    );
}
 
export default Beer;