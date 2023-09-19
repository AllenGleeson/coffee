import React from 'react'
import temp from '../../assets/temp.webp'

const Jumbotron = () => {
    return (
        <section className="jumbotron">
            <div className='cafe-image'>
                <img src={temp} alt="cafe" />
            </div>
            <div className="caption">
                <h2>Welcome To Hot Drinks</h2>
                <p>Swing by sometime to have a delicious brew.</p>
            </div>
        </section>
    );
}
      
      
      

export default Jumbotron