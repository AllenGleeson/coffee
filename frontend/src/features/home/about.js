import React from 'react'
import '../../assests/css/home.css'

const About = () => {
    return (
        <section className='row about-section mb-3'>
            <div id='about-us' className='col-6 position-relative slideLeft'>
                <div className='about-left h-75 position-absolute w-75'>
                    <article className='position-absolute w-50'>
                        <h3>About Us</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer.
                        </p>
                    </article>
                </div>
            </div>
            <div id='location' className='col-6 position-relative slideRight'>
                <div className='about-right h-75 position-absolute w-75'>
                    <article className='position-absolute w-50'>
                        <h4>Location</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
      
      
      

export default About