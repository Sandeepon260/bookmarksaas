import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = async () => {
  return (
    <header className='px-5 py-3 bg-black'>
        <nav className='flex justify-end gap-5 items-center'>
            <Link
                href="/"
            >
                <span className='text-white'>
                 Sandeepon Saha
                </span>
            </Link>
            <div className='flex items-center text-black'>
                <Button type='submit'>Logout</Button>
            </div>
            
        </nav>
        
    </header>
  )
}

export default Navbar