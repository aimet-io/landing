import React from 'react'

export default function ViewMain () {
  return (
    <main className='flex justify-center gap-10 my-16'>
      <div className='text-white flex flex-col gap-3'>
        <h2 className='text-[4rem] lg:text-[6.25rem] font-extrabold'>Diseño Web</h2>
        <p className='w-[800px]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque illum aliquam voluptatum dicta. Perferendis laboriosam earum officiis facilis hic, maiores accusamus fuga, repellat quas aliquam, repudiandae suscipit ad corrupti nesciunt non corporis tenetur cumque cum ullam? Quae at, explicabo nesciunt dolorum dicta saepe consectetur tempora atque consequuntur deserunt, quibusdam vitae perspiciatis maiores quis repellat. Necessitatibus voluptatibus, officia nisi asperiores, aliquid voluptates sed blanditiis, repellendus error assumenda officiis odio dolorem deleniti unde? Delectus soluta eaque pariatur maxime aspernatur deleniti. Et illo maxime non magnam, nihil temporibus facere corporis aliquam sint soluta laborum deleniti eos unde. Dignissimos quod labore beatae rerum repellendus.
        </p>

        <button className='p-3 bg-blue rounded-[30px] w-[12rem] text-[1.25rem]'>Contacto</button>
      </div>
      <img src='/img/working_group.png' className='max-w-[620px]' alt='Working Group' />
    </main>
  )
}
