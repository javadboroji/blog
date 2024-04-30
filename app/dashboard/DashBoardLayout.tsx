import React from 'react'
import Sidebar from './Components/Sidebar'
import { Grid } from '@mui/material'

function DashBoardLayout({children}: { children: React.ReactNode }) {
  return (
    <Grid container component={'div'} display={'flex'}>
          <Grid xs={12} lg={2} item>
          <Sidebar/>
          </Grid>
          <Grid item  xs={12} lg={9} padding={2}>
            {children}
          </Grid>
    </Grid>
  )
}

export default DashBoardLayout