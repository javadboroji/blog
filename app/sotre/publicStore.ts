import { create } from "zustand";
import { UserLogin } from "../Types";

interface useIsloginStore{
    login:UserLogin
    setLoginUserInfo:(userInfo:UserLogin)=>void
}
const useIsLogin = create<useIsloginStore>((set) => ({
    login: {
        isLogin:false,
        userName:"",
        role:""
    },
    setLoginUserInfo: (userInfo) => set(() => ({login:userInfo})),
  }));
  export {useIsLogin}