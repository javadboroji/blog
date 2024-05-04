'use client'
import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { useForm, SubmitHandler } from "react-hook-form"
interface IFormInput {
  userName: string
  password: string
}
function page() {
  /*================================ Login switch Register ==============================*/
  const [registerForm, setRegisterForm] = useState(false);
  const [loading, setLoading] = useState(false)
  const changeFormHandler = () => {
    setLoading(true);
    setRegisterForm((prev) => !prev);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  /*================================ Form Config ==============================*/


  const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  useEffect(() => {

  }, [registerForm])

  return (
    <Layout>
      {loading ? <p> درحال بارگزاری</p> :
        !registerForm ?
          <div className='w-1/2 flex flex-col shadow-lg justify-center mx-auto my-8'>
            <span className='text-xl text-center block py-8 w-full mx-auto'> ورود</span>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col p-8'>
              <input placeholder='نام کاربری' {...register("userName", { required: "نام کاربری اجباری می باشد", maxLength: 20 })} className='p-2 my-2 rounded-lg w-10/12 mx-auto border' />
              {errors.userName && <span className='text-red-500 text-xs text-center w-full block'> {errors.userName.message}</span>}
              <input placeholder='پسورد' {...register("password", { required: "پسورد اجباری می باشد", maxLength: 20 })} type='password' className='p-2 my-2 rounded-lg w-10/12 mx-auto border' />
              {errors.password && <span className='text-red-500 text-xs text-center w-full block'> {errors.password.message}</span>}
              <button type="submit" className='p-2 my-2 rounded-lg w-10/12 mx-auto border bg-blue-700 text-white' >ورود</button>
            </form>
            <p className='text-center p-6 text-gray-400 text-sm'> حساب کاربری ندارید؟<button onClick={changeFormHandler} className='text-lg text-blue-700'> ثبت نام</button></p>

          </div>
          :
          <div className='w-1/2 flex flex-col shadow-lg justify-center mx-auto my-8'>
            <span className='text-xl text-center block py-8 w-full mx-auto'> ثبت نام</span>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col p-8'>
              <input placeholder='نام کاربری' {...register("userName", { required: "نام کاربری اجباری می باشد", maxLength: 20 })} className='p-2 my-2 rounded-lg w-10/12 mx-auto border' />
              {errors.userName && <span className='text-red-500 text-xs text-center w-full block'> {errors.userName.message}</span>}
              <input placeholder='پسورد' {...register("password", { required: "پسورد اجباری می باشد", maxLength: 20 })} type='password' className='p-2 my-2 rounded-lg w-10/12 mx-auto border' />
              {errors.password && <span className='text-red-500 text-xs text-center w-full block'> {errors.password.message}</span>}
              <button type="submit" className='p-2 my-2 rounded-lg w-10/12 mx-auto border bg-blue-700 text-white' >ورود</button>
            </form>
            <p className='text-center p-6 text-gray-400 text-sm'> حساب کاربری دارید؟<button onClick={changeFormHandler} className='text-lg text-blue-700'> ورود به حساب کاربری </button></p>

          </div>
      }
    </Layout>
  )
}

export default page