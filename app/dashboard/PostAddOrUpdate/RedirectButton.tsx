"use client"
import { Button } from '@mui/material'
import { redirect, useRouter } from 'next/navigation';
import React from 'react'

function RedirectButton() {
    const router= useRouter()
    const opnModalHandler = () => {
        router.push("/dashboard/PostAddOrUpdate/newPost")
      };
  return (
    <Button
    type="submit"
    onClick={opnModalHandler}
    variant="contained"
    sx={{ margin: 2, padding: "0.5rem 3rem", backgroundColor: "#0a9396" }}
  >
    {" "}
    افزودن پست
  </Button>
  )
}

export default RedirectButton