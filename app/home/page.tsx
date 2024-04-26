import React from 'react'
import Layout from '../Components/Layout'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import Posts from '../Components/Posts/PostCard/Posts'

function page() {
  return (
   <Layout>
          <Posts/>
   </Layout>
  )
}

export default page