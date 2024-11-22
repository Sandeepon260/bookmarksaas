import { StringToBoolean } from 'class-variance-authority/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface MarkProps {
    logo: string;
    link: string;
    title: string;
    description?: string;
}

const Mark = ({logo, link, title, description} : MarkProps) => {
  return (
    <div className='flex space-x-4 p-4 rounded-lg items-center'>
        <Image 
            src={logo}
            alt={title}
            width={50}
            height={50}
            className='rounded-md'
        />
        <Link
            href={link}
        >
            <span className='text-white'>{title}</span>
        </Link>
    </div>
  )
}

export default Mark