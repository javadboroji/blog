"use client";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllPosts } from "@/app/AllApi";
import { FaPenToSquare } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

import { v4 as uuidv4 } from "uuid";
import { usePathname, useRouter } from "next/navigation";

function PostsGrid() {
  const [row, setRow] = useState([]);
  const columns = [
    {
      field: "title",
      headerName: "عنوان ",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    {
      field: "author",
      headerName: "نویسنده ",
      width: 100,
      editable: true,
    },
    {
      field: "date",
      headerName: "تاریخ انتشار",
      width: 120,
      editable: true,
    },
    {
      field: "action",
      headerName: "عملیات",
      width: 100,
      editable: true,
      renderCell: (parmas: any) => {
        return (
          <Box
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button onClick={() => editPost(parmas.row)}>
              <FaPenToSquare size={18} />
            </Button>
    
          </Box>
        );
      },
    },
  ];
  /*================================ Edit Post ==============================*/
  const router = useRouter();
  const editPost = (row: any) => {
    router.push(`/dashboard/PostAddOrUpdate/newPost/${row._id}`);
  };

  const rows: any = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPosts();
        const updateData = data?.posts.map((post: any) => ({
          ...post,
          id: uuidv4(),
        }));
        setRow(updateData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box component={"div"} sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={row || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[8]}
        hideFooterSelectedRowCount
        disableColumnMenu
        sx={{
          border: 0,
          "& .default-row": {
            backgroundColor: "#8ADAB2",
          },
          "& .muirtl-yrdy0g-MuiDataGrid-columnHeaderRow": {
            background: "#14213d !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            width: "max-content",
            lineHeight: "60px !important",
            position: "sticky",
            zIndex: "1000",
            color: "white",
          },
          "& .MuiDataGrid-virtualScroller ": {
            overflow: "hidden",
            marginTop: "0 !important",
          },
          "& .MuiDataGrid-main": {
            overflow: "visible",
          },

          "& .MuiDataGrid-cell ": {
            borderBottom: "0px",
            fontSize: "12px",
          },
        }}
      />
    </Box>
  );
}

export default PostsGrid;
