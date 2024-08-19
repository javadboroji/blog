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
import { DndContext } from '@dnd-kit/core';
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
            <Grid width={'100%'} container marginTop={"1rem"} display={'flex'}  >
                {/* <Grid xs={3}>
                    <ColumnLable tasks={task} allTaskCount={45} myTaskCount={2} columnType='awating' title='کارهای درانتظار انجام' style={{ Color: 'blue-100', borderColor: "blue-400" }} />
                </Grid> */}
                {/* <Grid xs={3}>
                    <ColumnLable allTaskCount={25} myTaskCount={10} columnType='doing' title='کارهای  درحال انجام ' style={{ Color: 'orange-100', borderColor: "orange-400" }} />
                </Grid>
                <Grid xs={3}>
                    <ColumnLable allTaskCount={5} myTaskCount={0} columnType='stoped' title='کارهای متوقف  شده' style={{ Color: 'red-100', borderColor: "red-400" }} />
                </Grid>
                <Grid xs={3}>
                    <ColumnLable allTaskCount={3} myTaskCount={10} columnType='complated' title='کارهای انجام  شده' style={{ Color: 'green-100', borderColor: "green-400" }} />
                </Grid> */}
                <DndContext>
                    <Draggable />
                    <Droppable />
                </DndContext>
            </Grid>

        </DashBoardLayout>
    )
}

export default page