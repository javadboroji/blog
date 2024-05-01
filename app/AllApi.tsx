import axios from 'axios'

const AddNewPost=(body:any)=>{
    axios
    .post(
        `${process.env.NEXT_PUBLIC_SIT_URL}api/AddPost`,
        {
            ...body
        },
        { headers: { 'Content-Type': 'application/json' } }
    )
    .then((res) => {
        console.log("post add", res);

    })
    .catch((error) => {
        console.log(error);
    });
}

export{AddNewPost}