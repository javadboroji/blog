import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddNewPost = (body: any, setOpenModal: any) => {
    axios
        .post(
            `
       ${process.env.NEXT_PUBLIC_SIT_URL}/api/AddPost`,
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
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_SIT_URL}/api/getPost`,
            { headers: { 'Content-Type': 'application/json' } }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const singlePost = async (id: string) => {
    try {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_SIT_URL}/api/getSinglePost`, id, { headers: { 'Content-Type': 'application/json' } });
        return result.data.post
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export { AddNewPost, getAllPosts, singlePost }