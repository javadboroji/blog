import React from 'react'
import DashBoardLayout from '../DashBoardLayout'
import PostAddOrUpdate from './PostAddOrUpdate'

function page() {
  return (
    <DashBoardLayout>
       <PostAddOrUpdate/>
    </DashBoardLayout>
  )
}

export default page