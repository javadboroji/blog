import Link from 'next/link'
import React from 'react'

function Sidebar() {
    const dashboardMenus = [
        {
            id: 1,
            title: ' داشبورد ',
            url: 'dashboard'
        },
        {
            id: 1,
            title: 'پست ها ',
            url: 'PostAddOrUpdate'
        },
        {
            id: 1,
            title: 'کاربران ها ',
            url: 'users'
        },
        {
            id: 1,
            title: 'کامنت  ها ',
            url: 'comments'
        },
        {
            id: 1,
            title: 'تنطیمات  ',
            url: 'seting'
        },
        
    ]
  return (
    <div className='flex flex-col h-[100vh] bg-gradient'> 
    <div className='min-h-44'></div>
        <ul className='p-0 my-8'>
            {dashboardMenus?.map((item,i)=>(
                <li key={i} className='p-4'>
                    <Link replace className='text-white text-center ' href={`${item.url}`}>{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar