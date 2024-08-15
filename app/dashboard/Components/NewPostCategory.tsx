"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function NewPostCategory() {
    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };
  return (
    <Box sx={{ minWidth: 120,margin:"1rem 0" }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="category"
        onChange={handleChange}
      >
        <MenuItem value={10}>عمومی</MenuItem>
        <MenuItem value={20}>ورزشی</MenuItem>
        <MenuItem value={30}>هنر</MenuItem>
        <MenuItem value={40}>سیاسی</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default NewPostCategory