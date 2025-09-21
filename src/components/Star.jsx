import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({noOfStars}) => {

    const [rating , setRating] = useState(0);
    const[hover , setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave (getCurrentIndex){
        setHover(rating)
    }


  return (
    <div className='star_rating flex'>

        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1

                return <FaStar 
                key={index}

                className={index <= (hover || rating) ? 'active' : 'inActive' }
                onClick={()=> handleClick(index)}

                onMouseMove={()=> handleMouseEnter(index)}

                onMouseLeave={()=> handleMouseLeave(index)}

                size={15}
                 />
            })
        }

    </div>
  )
}

export default Star