import React from 'react'
import  BannerShoe from '../assets/bannerShoe.png'

const Banner = () => {
    return (

        <div className='banner'>
            <div className='banner_text'>
                <h1>Adidas Men Running <br />
                Sneakers</h1>
                <p>Performance and design. Taken right to the edge.</p>
               <div>
               <button>Shop Now</button>
               <hr />
               </div>
            </div>
            <img src={BannerShoe} alt="" />
        </div>

    )
}

export default Banner