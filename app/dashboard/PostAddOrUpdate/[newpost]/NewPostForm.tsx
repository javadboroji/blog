"use client"
import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TinyEditor from '../../Components/TinyEditor'
import NewPostCategory from '../../Components/NewPostCategory'
import NewPostStatuspublish from '../../Components/NewPostStatuspublish'
import UploadImage from '../../Components/UploadImage'
import { blogPost } from '@/app/Types'

function NewPostForm() {
    const [newPost, setNewPost] = useState<blogPost>({
        author:"جواد بروجی",
        date:new Date().toLocaleDateString('fa-IR'),
        src:"",
        title:"",
        description:""
    });

    const savePost=()=>{

    }
    useEffect(() => {
        console.log(newPost);
        
    }, [newPost])
    
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
      <TinyEditor 
        newPost={newPost}
        setNewPost={setNewPost}
      />
      <Button
      type="button"
      variant="contained"
      sx={{ margin: 2,fontSize:"1.2rem", padding: "0.5rem 3rem", backgroundColor: "#0a9396" }}
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
      <NewPostCategory
          newPost={newPost}
          setNewPost={setNewPost}
      />

      <NewPostStatuspublish
          newPost={newPost}
          setNewPost={setNewPost}
      />

      <UploadImage 
          newPost={newPost}
          setNewPost={setNewPost}
      />
    </Grid>
 
  </Grid>
  )
}

export default NewPostForm