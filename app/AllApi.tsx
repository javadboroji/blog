import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginApi, UserLogin } from './Types';
import { useIsLogin } from './sotre/publicStore';
const AddNewPost = (body: any, setOpenModal: any) => {
    axios
        .post(
            `http://localhost:3000/api/AddPost`,
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
            setOpenModal(false)
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
const getAllPosts = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/getPost`
        );
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const singlePost = async (id: string) => {
    try {
        const result = await axios.post(`http://localhost:3000/api/getSinglePost`, id, { headers: { 'Content-Type': 'application/json' } });
        return result.data.post
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const loginUser=async(body:LoginApi)=>{
    try {
        const result = await axios.post(`http://localhost:3000/api/login`, body, { headers: { 'Content-Type': 'application/json' } });
        return result.data
    } catch (error) {
        toast.error('رمز عیور یا پسورد اشتباه می باشد', {
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
        throw error;
    }  
}
export { AddNewPost, getAllPosts, singlePost ,loginUser}