import React from 'react'
import VimeoPlayer from './autoplayvideo'
import SpecialtyCoffeeInfo from './specialtycoffeeinfo'

const BrandVideo = ({ heading, description, url }) => {
    return (
        <section className='brand-video-section'>
            <div className="row overflow-hidden m-0">
                <SpecialtyCoffeeInfo heading={heading} description={description} />
                <VimeoPlayer videoId={url} />
            </div>
        </section>
    );
}

export default BrandVideo;