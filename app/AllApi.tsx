import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginApi, UserLogin } from "./Types";
import { useIsLogin } from "./sotre/publicStore";
const AddNewPost = async (body: FormData) => {
  try {
    await axios
      .post(`http://localhost:3000/api/AddPost`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(" با موفقیت ثبت شد!", {
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
  } catch (error) {
    toast.error(" خطایی رخ داده است !", {
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
  }
};
const getAllPosts = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/getPost`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const singlePost = async (id: string, type?: string) => {
  const body = type === "edit" ? { id: id } : id;
  try {
    const result = await axios.post(
      `http://localhost:3000/api/getSinglePost`,
      body,
      { headers: { "Content-Type": "application/json" } }
    );
    return result.data.post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const loginUser = async (body: LoginApi) => {
  try {
    const result = await axios.post(`http://localhost:3000/api/login`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return result.data;
  } catch (error) {
    toast.error("رمز عیور یا پسورد اشتباه می باشد", {
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
};
export { AddNewPost, getAllPosts, singlePost, loginUser };
