export  interface blogPost {
    _id?:string,
    key?:number,
    src:string,
    date:string,
    author:string,
    title:string,
    description?:string
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