import { Blob } from "buffer"

export  interface blogPost {
    _id?:string,
    key?:number,
    src:any,
    date:string,
    author:string,
    title:string,
    description?:string,
    category?:string
}
export interface GetPostsResponse{
    
        code: number,
        message: string,
        posts: [blogPost]
    
}
export interface UserLogin{
    isLogin:boolean,
    userName:string,
    role:string
}
export interface LoginApi{
    userName:string,
    password:string
}
export interface newPostStateProps{
    newPost:blogPost,
    setNewPost: React.Dispatch<React.SetStateAction<blogPost>>
}