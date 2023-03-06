import React from 'react'

export default function About () {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center lg:px-52 overflow-hidden'>
      <div className='text-white grid gap-4'>
        <h4 className='text-[3rem]  font-extrabold'>NOSOTROS</h4>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
          dicta suscipit debitis eligendi officia earum quasi quos error porro
          autem officiis magni, dolor dignissimos cum enim dolores. Molestias
          voluptatibus eaque consectetur laborum veritatis facilis ullam
          perferendis consequatur cumque autem?
        </p>

        <button className='py-3 w-[160px] font-semibold text-xl bg-blue rounded-md'>Contacto</button>
      </div>

      <img className='max-w-[780px]' src='/draw/about.svg' alt='About' />
    </section>
  )
}
