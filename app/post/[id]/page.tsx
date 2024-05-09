import React from 'react'
import SinglePost from './SinglePost'
type singlePost = {
  params: any,
  searchParams: any
}
function page({ params, searchParams }: singlePost) {
  return (
    <div>
      <SinglePost params={params} searchParams={searchParams}/>
    </div>
  )
}

export default page