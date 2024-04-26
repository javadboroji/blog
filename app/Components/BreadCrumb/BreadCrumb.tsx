'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
interface breadcrumbPath {
    href: string,
    title: string
}
function BreadCrumb() {
    const paths = usePathname();

    /*================================ pathName split ==============================*/

    const [pathsName, setpathsName] = useState<breadcrumbPath[]>([])
    const splitPathName = () => {
        const result = paths.split('/').filter(path => path);
        const breadcrumbPaths: breadcrumbPath[] = result.map((path) =>
            path === 'home'
                ? ({ href: 'home', title: 'خانه' })
                : ({ href: '', title: '' })
        );

        setpathsName(breadcrumbPaths);

    }


    useEffect(() => {
        splitPathName();
    }, [])


    return (
        <div className='bg-gradient'>
            <div className='container h-full items-center'>
                <div className='mt-12 flex flex-col justify-center  h-full py-8'>
                    <h1 className='text-4xl font-bold text-white'> وبلاگ</h1>
                    <div className='flex mt-4 '>
                        {pathsName?.map((path, i) => (
                            <Link href={`${path.href}`} key={i} className='text-white font-medium px-4'> {path.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb