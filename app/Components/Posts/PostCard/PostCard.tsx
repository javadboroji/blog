import { blogPost } from '@/app/Types'
import Image from 'next/image'
import React from 'react'
const PostCard: React.FC<blogPost>=({ key, src, date, author, title}) =>{
  return (
    <div className='flex flex-col'>
        <Image src={src} alt='image/card' width={200} height={200}/>
        <div className='flex'>
            <span >{date}</span>
            <span className='px-2'>{author}</span>
        </div>
        <p>{title}</p>
    </div>
  )
}

export default PostCard