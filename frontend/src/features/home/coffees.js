import React from 'react';
import '../../assets/css/coffees.css'

const Coffees = () => {
    return (
        <section className='coffees-temp col-md-4 col-sm-12'>
            <div className="coffees-container">
                <div className="bar">
                    <div className="bold"><h3>Bold</h3></div>
                    <div className="circle top"></div>
                    <div className="circle middle"></div>
                    <div className="circle bottom"></div>
                    <div className="creamy"><h3>Creamy</h3></div>
                </div>
                <div className="coffee-cups">
                    <div className="cup-small doppio">
                        <div className="handle"></div>
                    </div>
                    <div className="cup americano">
                        <div className="handle"></div>
                    </div>
                    <div className="cup-small macchiato">
                        <div className="handle"></div>
                    </div>
                    <div className="cup-small flatwhite">
                        <div className="handle"></div>
                    </div>
                    <div className="cup cappuccino">
                        <div className="handle"></div>
                    </div>
                    <div className="cup-long latte">
                        <div className="handle"></div>
                        <div className="bottom-handle"></div>
                    </div>
                </div>
                <div className="info">
                    <div className="first">
                        <h1 className='coffee-name'>doppio</h1>
                        <p className='coffee-description'>Double shot of espresso. Straight.</p>
                    </div>
                    <div className="second">
                        <h1 className='coffee-name'>americano</h1>
                        <p className='coffee-description'>Shots of espresso diluted with water</p>
                    </div>
                    <div className="third">
                        <h1 className='coffee-name'>Macchiato</h1>
                        <p className='coffee-description'>Espresso with a dash of frothy foamed milk.</p>
                    </div>
                    <div className="fourth">
                        <h1 className='coffee-name'>Flat White</h1>
                        <p className='coffee-description'>Double shot of espresso with steamed milk.</p>
                    </div>
                    <div className="fifth">
                        <h1 className='coffee-name'>Cappuccino</h1>
                        <p className='coffee-description'>Double shot of espresso topped with an airy thick layer of foamed milk.</p>
                    </div>
                    <div className="sixth">
                        <h1 className='coffee-name'>Caffe Latte</h1>
                        <p className='coffee-description'>A shot of espresso in steamed milk lightly topped with foam.</p>
                    </div>
                </div>
            </div>
            <div className="key">
                <div className="circle espresso"><p className="small coffee-description">espresso</p></div>
                <div className="circle milk"><p className="small coffee-description">steamed milk</p></div>
                <div className="circle foam"><p className="small coffee-description">milk foam</p></div>
                <div className="circle water"><p className="small coffee-description">water</p></div>
            </div>
        </section>
    );
}

export default Coffees;