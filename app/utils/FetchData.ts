import axios from "axios";

type fetchPostProp=(url:string,body:any ,header?:string)=>void
export const fetchPost:fetchPostProp=async(url,body )=>{
    try {
        const response = await axios.post(url, body, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      
      }
}