"use client";
import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import TinyEditor from "../../Components/TinyEditor";
import NewPostCategory from "../../Components/NewPostCategory";
import NewPostStatuspublish from "../../Components/NewPostStatuspublish";
import UploadImage from "../../Components/UploadImage";
import { blogPost } from "@/app/Types";
import { AddNewPost, singlePost, updatePost } from "@/app/AllApi";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

type NewPostFormProps = {
  type: string;
};
const NewPostForm: React.FC<NewPostFormProps> = ({ type }) => {
  const path = usePathname();
  const [newPost, setNewPost] = useState<blogPost>({
    author: "جواد بروجی",
    date: new Date().toLocaleDateString("fa-IR"),
    src: "",
    title: "",
    description: "",
  });

  const savePost = async () => {
    if (newPost) {
      const formData = new FormData();
      formData.append("date", newPost.date);
      formData.append("title", newPost.title);
      formData.append("description", newPost.description as string);
      formData.append("author", newPost.author);
      formData.append("src", newPost.src);
      if (type === "edit") {
        const pathNameList = path.split("/");
        const postId = pathNameList[pathNameList.length - 1];
        formData.append("_id", postId);
        updatePost(formData);
      } else {
        AddNewPost(formData);
      }
    }
  };
  const fetchSigleData = async (id: string) => {
    const result = await singlePost(id, "edit");
    await setNewPost({
      author: result.author,
      src: result.src,
      title: result.title,
      description: result.description,
      date: "",
    });
  };
  useEffect(() => {
    if (type === "edit") {
      const pathNameList = path.split("/");
      const postId = pathNameList[pathNameList.length - 1];
      fetchSigleData(postId);
    }
  }, [type]);

  return (
    <Grid
      component={"div"}
      container
      spacing={2}
      sx={{ marginTop: 1 }}
      display={"flex"}
      alignItems={"flex-start"}
    >
      <Grid item xs={12} lg={9}>
        <TinyEditor newPost={newPost} setNewPost={setNewPost} />
        <Button
          type="button"
          variant="contained"
          sx={{
            margin: 2,
            fontSize: "1.2rem",
            padding: "0.5rem 3rem",
            backgroundColor: "#0a9396",
          }}
          onClick={savePost}
        >
          {" "}
          ثبت
        </Button>
      </Grid>

      <Grid item xs={12} lg={3}>
        <TextField
          sx={{ width: "100%" }}
          disabled
          id="outlined-disabled"
          label="نویسنده"
          defaultValue="جواد بروجی"
        />
        <NewPostCategory newPost={newPost} setNewPost={setNewPost} />

        <NewPostStatuspublish newPost={newPost} setNewPost={setNewPost} />

        <UploadImage newPost={newPost} setNewPost={setNewPost} type={type} />
      </Grid>
      <ToastContainer/>
    </Grid>
  );
};

export default NewPostForm;
