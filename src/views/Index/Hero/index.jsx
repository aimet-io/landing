import { useRouter } from 'next/router'

export function HeroSection () {
  const { push } = useRouter();
  return (
    <section className='flex justify-center items-center gap-10 my-16 flex-wrap px-7 md:flex-nowrap md:px-12'>
      <div className='text-white flex flex-col gap-3'>
        <h1 className='text-[3rem] md:text-[3.5rem] lg:text-[5.25rem] font-extrabold'>Aimet Solutions</h1>
        <p className='max-w-full'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque illum aliquam voluptatum dicta. Perferendis laboriosam earum officiis facilis hic, maiores accusamus fuga, repellat quas aliquam, repudiandae suscipit ad corrupti nesciunt non corporis tenetur cumque cum ullam? Quae at, explicabo nesciunt dolorum dicta saepe consectetur tempora atque consequuntur deserunt, quibusdam vitae perspiciatis maiores quis repellat. Necessitatibus voluptatibus, officia nisi asperiores, aliquid voluptates sed blanditiis, repellendus error assumenda officiis odio dolorem deleniti unde? Delectus soluta eaque pariatur maxime aspernatur deleniti.
        </p>

        <button className='p-3 bg-blue rounded-[30px] w-[12rem] text-[1.25rem]' onClick={() => push("/project-builder")}>Contacto</button>
      </div>
      <img src='/img/working_group.png' className='md:w-5/12' alt='Working Group' />
    </section>
  )
}
