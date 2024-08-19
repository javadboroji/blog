import React from "react";
import NewPostForm from "../NewPostForm";
import { Grid } from "@mui/material";
import DashBoardLayout from "@/app/dashboard/DashBoardLayout";
import DashboardHeader from "@/app/dashboard/Components/DashboardHeader";

function EditPost() {
  return (
    <DashBoardLayout>
      <DashboardHeader title="ویرایش پست"/>
      <NewPostForm  type={"edit"}/>
    </DashBoardLayout>
  );
}

export default EditPost;
