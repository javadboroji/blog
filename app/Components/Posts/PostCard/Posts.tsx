'use client'
import { blogPost } from '@/app/Types';
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';
import { Grid } from '@mui/material';
import { getAllPosts } from '@/app/AllApi';

const GetAllPosts = async () => {
    const apiUrl = 'http://localhost:3000/api/getPost';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
const Posts = () => {

    const [data, setData] = useState<blogPost[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllPosts();
                setData(data.posts)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchData();
    }, [])

    return (
            <Grid container display={'flex'} flex={1} spacing={2}>
                {data?.map((post, i) =>
                    <Grid item xs={12} lg={3} key={i}>
                        <PostCard src={post.src} date={post.date} author={post.author} title={post.title}  _id={post._id}/>
                    </Grid>)}
            </Grid>
    )
}

export default Posts