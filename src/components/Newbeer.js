import { useState } from 'react';
import './Newbeer.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Newbeer = () => {
    const [name, setName] = useState('');
    const [aLevel, setAlevel] = useState(0);
    const [tagline, setTagline] = useState('');
    const [fBrewed, setFbrewed] = useState('');
    const [desc, setDesc] = useState('');
    const [contri, setContri] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: name,
            attenuation_level: aLevel,
            tagline: tagline,
            first_brewed: fBrewed,
            description: desc,
            contributed_by: contri
        })
        .then(navigate('/beers'))
        .catch((err) => {
            console.log(err.message);
         });
      }
    

    return (
        <div className='Newbeer'>
            <form action="post" onSubmit={handleSubmit}>
                <div id="name-line">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="attenuation_level">Attenuation Level</label>
                        <input type="number" name="attenuation_level" id="" required onChange={e => setAlevel(e.target.value)}/>
                    </div>
                </div>
                <div id='name-line'>
                    <div>
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" name="tagline" required onChange={e => setTagline(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input type="text" name="first_brewed" id="" required onChange={e=> setFbrewed(e.target.value)}/>
                    </div>
                </div>
                <div id='des'>
                    <label htmlFor="description">Descrpition</label>
                    <textarea name="description" id="" cols="30" rows="10" required onChange={e=> setDesc(e.target.value)}></textarea>
                </div>
                <div id='by'>
                    <label htmlFor="contributed_by">Contributed by</label>
                    <input type="text" name="contributed_by" id="" required onChange={e=> setContri(e.target.value)}/>
                </div>
                <input type="submit" value="ADD NEW" id='btn-new'/>
            </form>
        </div>
    );
}
 
export default Newbeer;