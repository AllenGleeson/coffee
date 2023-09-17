import React from 'react'
import VimeoPlayer from './autoplayvideo'
import SpecialtyCoffeeInfo from './specialtycoffeeinfo'

const BrandVideo = () => {
    return (
        <section className='brandvideo-section mb-3'>
            <div className="row">
                <h1>Autoplay YouTube Video</h1>
                <SpecialtyCoffeeInfo/>
                <VimeoPlayer videoId="563161697" />
            </div>
        </section>
    );
}
      
      
      

export default BrandVideo