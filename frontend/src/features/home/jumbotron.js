import React from 'react'
import temp from '../../assests/temp.webp'

const Jumbotron = () => {
    return (
        <section class="jumbotron">
            <div className='cafe-image'>
                <img src={temp} alt="cafe" />
            </div>
            <div class="caption">
                <h2>Welcome To Hot Drinks</h2>
                <p>Swing by sometime to have a delicious brew.</p>
            </div>
        </section>
    );
}
      
      
      

export default Jumbotron