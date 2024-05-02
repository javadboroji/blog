import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddNewPost=(body:any)=>{
    axios
    .post(
        `
        http://localhost:3000/api/AddPost`,
        {
            ...body
        },
        { headers: { 'Content-Type': 'application/json' } }
    )
    .then((res) => {
        toast.success(' با موفقیت ثبت شد!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            //transition: Bounce,
            });

    })
    .catch((error) => {
        console.log(error);
        toast.error(' خطایی رخ داده است !', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            //transition: Bounce,
            });

    });
}

export{AddNewPost}