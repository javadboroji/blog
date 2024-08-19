"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { newPostStateProps } from "@/app/Types";

const NewPostCategory: React.FC<newPostStateProps> = ({
  newPost,
  setNewPost,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setNewPost((prev) => ({ ...prev, category: event.target.value as string }));
  };
  return (
    <Box sx={{ minWidth: 120, margin: "1rem 0" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={newPost.category||""}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value={"public"}>عمومی</MenuItem>
          <MenuItem value={"sport"}>ورزشی</MenuItem>
          <MenuItem value={"art"}>هنر</MenuItem>
          <MenuItem value={"political"}>سیاسی</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NewPostCategory;
