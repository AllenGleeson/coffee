import React from 'react';
import '../../assets/css/coffees.css'

const Coffees = () => {
    return (
        <section className='coffees-section col-5'>
            <div class="coffees-container">
                <div class="bar">
                    <div class="bold"><h3>Bold</h3></div>
                    <div class="circle top"></div>
                    <div class="circle middle"></div>
                    <div class="circle bottom"></div>
                    <div class="creamy"><h3>Creamy</h3></div>
                </div>
                <div class="coffee-cups">
                    <div class="cup-small doppio">
                        <div class="handle"></div>
                    </div>
                    <div class="cup americano">
                        <div class="handle"></div>
                    </div>
                    <div class="cup-small macchiato">
                        <div class="handle"></div>
                    </div>
                    <div class="cup-small flatwhite">
                        <div class="handle"></div>
                    </div>
                    <div class="cup cappuccino">
                        <div class="handle"></div>
                    </div>
                    <div class="cup-long latte">
                        <div class="handle"></div>
                        <div class="bottom-handle"></div>
                    </div>
                </div>
                <div class="info">
                    <div class="first">
                        <h1 className='coffee-name'>doppio</h1>
                        <p className='coffee-description'>Double shot of espresso. Straight.</p>
                    </div>
                    <div class="second">
                        <h1 className='coffee-name'>americano</h1>
                        <p className='coffee-description'>Shots of espresso diluted with water</p>
                    </div>
                    <div class="third">
                        <h1 className='coffee-name'>Macchiato</h1>
                        <p className='coffee-description'>Espresso with a dash of frothy foamed milk.</p>
                    </div>
                    <div class="fourth">
                        <h1 className='coffee-name'>Flat White</h1>
                        <p className='coffee-description'>Double shot of espresso with steamed milk.</p>
                    </div>
                    <div class="fifth">
                        <h1 className='coffee-name'>Cappuccino</h1>
                        <p className='coffee-description'>Double shot of espresso topped with an airy thick layer of foamed milk.</p>
                    </div>
                    <div class="sixth">
                        <h1 className='coffee-name'>Caffe Latte</h1>
                        <p className='coffee-description'>A shot of espresso in steamed milk lightly topped with foam.</p>
                    </div>

                </div>
            </div>

            <div class="key">
                <div class="circle espresso"><p class="small coffee-description">espresso</p></div>
                <div class="circle milk"><p class="small coffee-description">steamed milk</p></div>
                <div class="circle foam"><p class="small coffee-description">milk foam</p></div>
                <div class="circle water"><p class="small coffee-description">water</p></div>
            </div>
        </section>
    );
}

export default Coffees;