'use client'
import { blogPost } from '@/app/Types';
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';
import { Grid } from '@mui/material';

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
        const apiUrl = `${process.env.NEXT_PUBLIC_SIT_URL}api/getPost`;
        try {
            const response = fetch(apiUrl)
                .then(res => {
                    return res.json();

                }
                )
                .then((data) => setData(data.posts)
                )
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [])

    return (
            <Grid container display={'flex'} flex={1} spacing={2}>
                {data?.map((post, i) =>
                    <Grid item xs={12} lg={3} key={i}>
                        <PostCard src={post.src} date={post.date} author={post.author} title={post.title} />
                    </Grid>)}
            </Grid>
    )
}

export default Posts