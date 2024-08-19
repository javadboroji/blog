import React from "react";
import DashBoardLayout from "../../DashBoardLayout";
import { Button, Grid, TextField } from "@mui/material";
import DashboardHeader from "../../Components/DashboardHeader";
import TinyEditor from "../../Components/TinyEditor";
import NewPostCategory from "../../Components/NewPostCategory";
import NewPostStatuspublish from "../../Components/NewPostStatuspublish";
import UploadImage from "../../Components/UploadImage";
import NewPostForm from "./NewPostForm";

function page() {
  return (
    <DashBoardLayout>
      <DashboardHeader  title="پست جدید"/>
      <NewPostForm type="add"/>
    </DashBoardLayout>
  );
}

export default page;
