import axios from 'axios'

const AddNewPost=(body:any)=>{
    axios
    .post(
        "http://localhost:3000/api/AddPost",
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