import './Homepage.css'

import allbeersimage from '../assets/beers.png';
import randombeerimage from '../assets/random-beer.png';
import newbeerimage from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <main className='Homepage'>
            <Link to='/beers'>
                <div id="all-beer">
                    <img src={allbeersimage} alt="" />
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis in dui ultrices pharetra a sit amet est.</p>
                </div>
            </Link>
            <div id="ran-beer">
                <img src={randombeerimage} alt="" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis in dui ultrices pharetra a sit amet est.</p>
            </div>
            <div id="new-beer">
                <img src={newbeerimage} alt="" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis in dui ultrices pharetra a sit amet est.</p>
            </div>
        </main>
    );
}
 
export default Homepage;