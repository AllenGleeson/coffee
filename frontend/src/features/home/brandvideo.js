import React from 'react'
import VimeoPlayer from './autoplayvideo'
import SpecialtyCoffeeInfo from './specialtycoffeeinfo'

const BrandVideo = () => {
// const BrandVideo = ({ heading, description, video }) => {
    return (
        <section className='brandvideo-section mb-3'>
            <div className="row">
                <SpecialtyCoffeeInfo/>
                <VimeoPlayer videoId="563161697" />
                {/* <SpecialtyCoffeeInfo heading={heading} description={description} />
                <VimeoPlayer videoId={video} /> */}
            </div>
        </section>
    );
}

export default BrandVideo