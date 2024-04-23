import React from 'react'
import Menus from './Menus/Menus'
import SiteName from './SitName/SiteName'

function Header() {
  return (
    <div className='flex  header-bg-gradient p-8 border-b'>
        <div className='container'>
            <div className='flex justify-between row-auto '>
                <Menus/>
                <SiteName/>
            </div>
        </div>
    </div>
  )
}

export default Header