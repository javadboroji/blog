'use client'
import { singlePost } from '@/app/AllApi'
import Layout from '@/app/Components/Layout'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { blogPost } from '@/app/Types'
type singlePost = {
    params: any,
    searchParams: any
  }
function SinglePost({searchParams,params}:singlePost) {
  const [singleData, setSingleData] = useState<blogPost>({
    src: '',
    date: '',
    author: '',
    title: ''
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await singlePost(params);
        setSingleData(data);

      } catch (error) {
        return error
      }
    }

    fetchData()
  }, [])

  return (
    <Layout>
     <div className='flex w-full justify-center relative overflow-hidden h-[35rem] my-4 rounded-lg'>
     <Image src={singleData.src} alt='singleData' width={500} height={500} className='absolute w-full h-full' />
     </div>

     <div className='flex '>
      <span> نویسنده:{singleData.author}</span>
      <span className='mx-8'>تاریخ انتشار:{singleData.date} </span>
     </div>
     <div>
      <p className='text-3xl py-8'>
        {singleData.title}
      </p>

     </div>
     <div>
      <p>{singleData.description}

      </p>
     </div>
    </Layout>
  )
}

export default SinglePost