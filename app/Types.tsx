export  interface blogPost {
    key?:number,
    src:string,
    date:string,
    author:string,
    title:string
}
export interface GetPostsResponse{
    
        code: number,
        message: string,
        posts: [blogPost]
    
}
