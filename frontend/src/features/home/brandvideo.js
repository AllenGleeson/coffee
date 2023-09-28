import React from 'react'
import VimeoPlayer from './autoplayvideo'
import SpecialtyCoffeeInfo from './specialtycoffeeinfo'

const BrandVideo = ({ heading, description, url }) => {
    return (
        <section className='brandvideo-section mb-3'>
            <div className="row">
                <SpecialtyCoffeeInfo heading={heading} description={description} />
                <VimeoPlayer videoId={url} />
                {/* <SpecialtyCoffeeInfo heading={heading} description={description} />
                <VimeoPlayer videoId={video} /> */}
            </div>
        </section>
    );
}

export default BrandVideo