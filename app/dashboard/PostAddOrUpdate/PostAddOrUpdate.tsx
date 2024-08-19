import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import MuiLayOut from "@/app/MuiLayOut";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostsGrid from "./PostsGrid";
import { redirect, useRouter } from "next/navigation";
import RedirectButton from "./RedirectButton";

function PostAddOrUpdate() {

  /*================================ Modal Config ==============================*/
    
  return (
    <MuiLayOut>
      <RedirectButton />
      <PostsGrid />
    </MuiLayOut>
  );
}

export default PostAddOrUpdate;
