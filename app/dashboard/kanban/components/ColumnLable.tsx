import { cn } from '@/app/utils/cn'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

type columnStyleType = {
    borderColor: string,
    Color: string

}

export type TaskType={
    id:string|number,
    title:string,
    uniqId:string|number,
    startData:string,
    endData:string,
    piroty:number,
    personImages:string[]|any
}
type ColumnLableType = {
    title: string,
    myTaskCount: number,
    allTaskCount: number,
    columnType: string,
    style: columnStyleType,
    tasks:TaskType[]

}
const ColumnLable: React.FC<ColumnLableType> = ({ allTaskCount, columnType, myTaskCount, title, style,tasks }) => {
    const borderColorClass = `border-${style.borderColor}`;
    const colorClass = `bg-${style.Color}`;
    const textColorClass = `text-${style.borderColor}`;

    return (
        <div className={cn('flex justify-between p-4 border-2 rounded-lg bg-white w-[95%] border-green-400 border-blue-400 border-orange-400 border-red-400', borderColorClass)}>
            <div className='flex flex-col'>
                <span className='text-base leading-8'>{title}</span>
                <span className='text-sm text-gray-500'> کارهای من: {myTaskCount} </span>
            </div>
            <div className={cn('rounded-full flex justify-center items-center relative w-8 h-8 bg-green-100 bg-blue-100 bg-orange-100 bg-red-100', colorClass)}>
                <span className={cn('text-center m-auto text-green-400 text-blue-400 text-orange-400 text-red-400', textColorClass)}>{allTaskCount}</span>
            </div>
        </div>
    );
}

export default ColumnLable