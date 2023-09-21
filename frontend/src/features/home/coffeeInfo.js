import React from 'react';
import '../../assets/css/coffeeInfo.css'

const CoffeeInfo = () => {
    return (
        <section className='coffeeInfo-section col-9'>
            <div class="container">
                <div class="row row--center">
                    <div class="col-md-6 col-sm-7 col-xs-12">
                        <h1 class="secttitle best--bottom sect--white-text">The best coffee shop</h1>
                        <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-4">
                                <img src="https://image.ibb.co/n5gUtm/icon_1.png" class="bestimg"/>
                                    <h2 class="besttitle">Best beans</h2>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4">
                                <img src="https://image.ibb.co/dwEXDm/icon_2.png" class="bestimg"/>
                                    <h2 class="besttitle">Best beans</h2>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4">
                                <img src="https://image.ibb.co/j5Og66/icon_3.png" class="bestimg"/>
                                    <h2 class="besttitle">Best beans</h2>
                            </div>
                        </div>

                        <p class="sectsubtitle best--margin sect--white-text ">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, omnis iste natus error sit voluptatem accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque.
                        </p>
                        <a href="#" class="btn btn--top">About us</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoffeeInfo;

