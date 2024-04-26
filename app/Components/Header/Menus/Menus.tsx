import Link from 'next/link'
import React from 'react'

function Menus() {
    const menus = [
        {
            id: 1,
            title: 'خانه',
            url: '/'
        },
        {
            id: 2,
            title: 'درباره ما',
            url: 'About'
        },
        {
            id: 3,
            title: 'تماس با ما',
            url: 'Contact'
        },
    ]
    return (
        <ul className='flex'>
            {menus?.map((menu) => (
                <li key={menu.id} className='px-4'>
                    <Link href={`/${menu.url}`} className='text-white text-lg' >{menu.title} </Link>
                </li>
            ))}
        </ul>
    )
}

export default Menus