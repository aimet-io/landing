import Link from 'next/link'
import React from 'react'

export default function Nav () {
  return (
    <nav className='flex justify-end p-6'>
      <ul className='text-white text-[1.25rem] flex gap-[48px]'>
        <li>
          <Link href='#'>Servicios</Link>
        </li>
        <li>
          <Link href='#'>Portafolio</Link>
        </li>
        <li>
          <Link href='#'>Nosotros</Link>
        </li>
        <li>
          <Link href='#'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}
