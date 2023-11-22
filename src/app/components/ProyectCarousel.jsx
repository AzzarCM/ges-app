import React from 'react'
import ScrollCarousel from 'scroll-carousel-react';

export const ProyectCarousel = ({data, dir}) => {
  // right rtl left ltr
  return (
    <>
      <ScrollCarousel
        autoplay
        direction={dir}
        margin={80}
        autoplaySpeed={1}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {data.map((item)=> (
          <div className='mt-10 flex flex-col'>
            <img src={item.img} className='w-max h-52 rounded-md' alt='carousel-img'/>
            <h3 className='text-center font-semibold mt-5'>{item.text}</h3>
          </div>
        ))}
      </ScrollCarousel>
    </>
  )
}
