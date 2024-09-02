"use client"
import React from 'react'
import DashBoardLayout from '../DashBoardLayout'
import ColumnLable, { TaskType } from './components/ColumnLable'
import { Grid } from '@mui/material'
import { v4 } from 'uuid'
import img from "@/public/footerbg.png"
import img1 from "@/public/footerbg.png"
import img2 from "@/public/footerbg.png"
import img3 from "@/public/footerbg.png"
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'

function page() {
    const task = [
        {
            id: 1,
            title: "تکمیل سفارشات",
            uniqId: v4(),
            startData: "1403/03/30",
            endData: "1403/04/30",
            piroty: 3,
            personImages: [img, img1, img3, img2]
        },
        {
            id: 2,
            title: "تکمیل سفارشات",
            uniqId: v4(),
            startData: "1403/03/30",
            endData: "1403/04/30",
            piroty: 3,
            personImages: [img, img1, img3, img2]
        },
        {
            id: 3,
            title: "تکمیل سفارشات",
            uniqId: v4(),
            startData: "1403/03/30",
            endData: "1403/04/30",
            piroty: 3,
            personImages: [img, img1, img3, img2]
        }
    ]
    return (
        <DashBoardLayout>
            <h1> مدیریت کارها</h1>
         

        </DashBoardLayout>
    )
}

export default page