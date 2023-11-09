import React from 'react'
import { HomeWelcome } from '../components/HomeWelcome'
import { SucessStories } from '../components/SucessStories'

export const Home = () => {
  return (
    <div className='flex flex-col'>
      <HomeWelcome />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcc26c" fill-opacity="1" d="M0,32L40,58.7C80,85,160,139,240,149.3C320,160,400,128,480,101.3C560,75,640,53,720,53.3C800,53,880,75,960,80C1040,85,1120,75,1200,64C1280,53,1360,43,1400,37.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <h2 className='text-center text-5xl font-bold -mt-12 sm:-mt-20 lg:-mt-40 xl:-mt-50 2xl:-mt-60'>Somos tus <span className='font-thin'>expertos</span> eléctricos</h2>
      <div className='h-1 w-40 bg-gradient-to-r from-custom-black-gray place-self-center mt-2 mb-20'></div>
      <SucessStories/>
      {/* <div>
        <h2 className='text-3xl'>Second section</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius cum modi, veniam amet expedita tenetur voluptatem dolore voluptate fuga doloremque excepturi assumenda minima saepe eligendi debitis quibusdam? Voluptate, rem!
          Impedit dolore illum quis fugiat labore officiis porro reprehenderit mollitia delectus voluptatum! Magni odio provident dignissimos soluta perferendis! Quod ullam atque quae non fugiat quaerat totam voluptate culpa et illo.
          Beatae amet quo dolores a, dolorem perspiciatis repudiandae illum facilis voluptate accusantium, esse necessitatibus odio corporis cum quibusdam at voluptates. Voluptatibus quam officia ad repellat. Nemo earum amet quo. Omnis.</p>
      </div> */}

    </div>
  )
}
