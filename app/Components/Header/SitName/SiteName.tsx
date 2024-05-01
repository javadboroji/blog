import Image from 'next/image'
import React from 'react'
import logo from '@/public/blog-logo.png'
function SiteName() {
  return (
    <div>
      <Image alt='logo' src={logo} width={150} height={40}/>
    </div>
  )
}

export default SiteName