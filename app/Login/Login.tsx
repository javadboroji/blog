"use client";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { useForm, SubmitHandler } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer } from "react-toastify";
import { loginUser } from "../AllApi";
import { useIsLogin } from "../sotre/publicStore";
import { useRouter } from "next/navigation";
import { featchUserCookie } from "../actions";

interface IFormInput {
  userName: string;
  password: string;
  email?: string;
}
function Login() {
  /*================================ Login switch Register ==============================*/
  const [registerForm, setRegisterForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const changeFormHandler = () => {
    setLoading(true);
    setRegisterForm((prev) => !prev);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  /*================================ Form Config ==============================*/
  const loginFn = async (data: any) => {
    const result = await loginUser(data);
    if (result.login) setLoading(true); //spiner active
    //set user info in zus
    const userInfoObj = {
      isLogin: true,
      userName: result.userName,
      role: "admin",
    };
    await setLoginUserInfo(userInfoObj);
    //set user data  in cookie 
    await featchUserCookie(userInfoObj);
    //redirect to dashboard page
    router.push("/dashboard");
  };

  const { setLoginUserInfo } = useIsLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => loginFn(data);

  useEffect(() => {}, [registerForm]);

  return (
    <Layout>
      {loading ? (
        <div className="flex py-12 max-h-14 w-full justify-center">
          <CircularProgress />
        </div>
      ) : !registerForm ? (
        /*================================ Login Form ==============================*/

        <div className="w-1/2 flex flex-col shadow-lg justify-center mx-auto my-8">
          <span className="text-xl text-center block py-8 w-full mx-auto">
            {" "}
            ورود
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col p-8"
          >
            <input
              placeholder="نام کاربری"
              {...register("userName", {
                required: "نام کاربری اجباری می باشد",
                maxLength: 20,
              })}
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border"
            />
            {errors.userName && (
              <span className="text-red-500 text-xs text-center w-full block">
                {" "}
                {errors.userName.message}
              </span>
            )}
            <input
              placeholder="پسورد"
              {...register("password", {
                required: "پسورد اجباری می باشد",
                maxLength: 20,
              })}
              type="password"
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border"
            />
            {errors.password && (
              <span className="text-red-500 text-xs text-center w-full block">
                {" "}
                {errors.password.message}
              </span>
            )}
            <button
              type="submit"
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border bg-blue-700 text-white"
            >
              ورود
            </button>
          </form>
          <p className="text-center p-6 text-gray-400 text-sm">
            {" "}
            حساب کاربری ندارید؟
            <button
              onClick={changeFormHandler}
              className="text-lg text-blue-700"
            >
              {" "}
              ثبت نام
            </button>
          </p>
        </div>
      ) : (
        /*================================ Register Form ==============================*/

        <div className="w-1/2 flex flex-col shadow-lg justify-center mx-auto my-8">
          <span className="text-xl text-center block py-8 w-full mx-auto">
            {" "}
            ثبت نام
          </span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col p-8"
          >
            <input
              placeholder="نام کاربری"
              {...register("userName", { required: true, maxLength: 20 })}
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border"
            />

            <input
              placeholder="ایمیل"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "ایمیل واردشده درست نمی باشد",
                },
              })}
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border"
            />
            {errors.email && (
              <span className="text-red-500 text-xs text-center w-full block">
                {" "}
                {errors.email.message}
              </span>
            )}

            <input
              placeholder="پسورد"
              {...register("password", { required: true, maxLength: 20 })}
              type="password"
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border"
            />

            <button
              type="submit"
              className="p-2 my-2 rounded-lg w-10/12 mx-auto border bg-blue-700 text-white"
            >
              ورود
            </button>
          </form>
          <p className="text-center p-6 text-gray-400 text-sm">
            {" "}
            حساب کاربری دارید؟
            <button
              onClick={changeFormHandler}
              className="text-lg text-blue-700"
            >
              {" "}
              ورود به حساب کاربری{" "}
            </button>
          </p>
        </div>
      )}
      <ToastContainer autoClose={8000} />
    </Layout>
  );
}

export default Login;
