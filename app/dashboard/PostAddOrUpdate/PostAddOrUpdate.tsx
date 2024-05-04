'use client'
import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AddNewPost } from '@/app/AllApi'
import MuiLayOut from '@/app/MuiLayOut';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalComponent from '@/app/Components/ModalComponent/ModalComponent'
import PostsGrid from './PostsGrid'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

function PostAddOrUpdate() {
    const submitPosts = (form: any) => {
        AddNewPost(form,setOpenModal);
    }
    const [dateState, setDateState] = useState<Dayjs | null>(null)
    const [form, setForm] = useState({
        date: dateState,
        author: '',
        title: '',
        description: ''
    });

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }
    /*================================ Modal Config ==============================*/
    const [openModal, setOpenModal] = React.useState(false);
    const opnModalHandler=()=>{
        setOpenModal(true)
    }
    useEffect(() => {
    
    }, [dateState])
    
    return (
        <MuiLayOut>
             <Button type='submit' onClick={opnModalHandler} variant="contained" sx={{ margin: 2, padding: '0.5rem 3rem', backgroundColor: '#0a9396' }}> افزودن پست</Button>

            <ModalComponent modalW='80%' openModal={openModal} setOpenModal={setOpenModal}>
                <Grid component={'div'} container spacing={2} sx={{ marginTop: 5 }} >
                    <Grid item xs={12} lg={12}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='title' label="عنوان" variant="outlined" value={form.title} onChange={onchange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='author' label="نویسنده" variant="outlined" value={form.author} onChange={onchange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {/* <TextField sx={{ width: '100%' }} id="outlined-basic" name='date' label="تاریخ" variant="outlined" value={form.date} onChange={onchange} /> */}
                        <DatePicker name='date' label="تاریخ انتشار" value={dateState ? dateState.toDate() : null}    onChange={(newValue) => setDateState(newValue ? dayjs(newValue) : null)}/>

                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='description' multiline rows={5} label="توضییحات" variant="outlined" value={form.description} onChange={onchange} />
                    </Grid>
                </Grid>
                <Button type='submit' onClick={() => submitPosts({ ...form })} variant="contained" sx={{ margin: 2, padding: '0.5rem 3rem', backgroundColor: '#0a9396' }}> ثبت</Button>
            </ModalComponent>
            <PostsGrid/>
            <ToastContainer />
        </MuiLayOut>
    )
}

export default PostAddOrUpdate