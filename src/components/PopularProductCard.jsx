import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({price, name, imgURL, s}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:items-center max-sm:w-full'>
    <img src={imgURL} />
    <div className="mt-5 flex justify-start gap-2.5 text-xl pb-3">
<img src={star} alt="rating-star" width={24} height={24} />
<p className='text-slate-500 text-left'>(4.5)</p>
 </div>
 <p className='text-xl font-bold pb-3 text-left'>{name}</p>
 <p className='text-xl font-bold text-coral-red pb-3 text-left'>{price}</p>
    </div>
  )
}

export default PopularProductCard