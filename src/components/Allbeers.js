import axios from "axios";
import { useEffect, useState } from "react";
import './Allbeers.css'
import { Link } from "react-router-dom/dist";

const Allbeers = () => {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchBeer, setSearch] = useState(beers);
    
    const findBeer = item =>{
        setBeers(searchBeer.filter(filtrate => filtrate.name.toLowerCase().includes(item.target.value.toLowerCase())));
    }

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(data =>{
            setLoading(true)
            setBeers(data.data);
            setSearch(data.data);
        })
        .catch((err) => {
            console.log(err.message);
         });
    }, [])

    return (
        <>
            <input type="search" onChange={e=>findBeer(e)} id="beers-search"/>
            {loading ? 
            <div className="Allbeers">
                {beers.map(item =>{
                    return (
                        <Link to={item._id} key={item._id}>
                            <div className="container" >
                                <section className="img">
                                    <img src={item.image_url} alt="" />
                                </section>
                                <section className="text">
                                    <h1>{item.name}</h1>
                                    <p>{item.tagline}</p>
                                    <p>Created: {item.first_brewed}</p>
                                </section>
                            </div>
                        </Link>
                )})}
            </div>
            : <div>Still Loading...</div>}
        </>
    );
}
 
export default Allbeers;