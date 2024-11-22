import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface FolderProps {
    logo: string;
    title: string;
    link: string;
}

const Folder = ({logo, title, link}: FolderProps) => {
  return (
    
        <Link
            href={link}
            className='flex space-x-4 p-4 rounded-lg items-center'
        >
            <Image 
                src={logo}
                alt={title}
                width={50}
                height={50}
            />
            <span className='text-white'>{title}</span>
        </Link>
   
  )
}

export default Folder