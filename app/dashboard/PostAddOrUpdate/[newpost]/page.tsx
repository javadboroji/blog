import React from "react";
import DashBoardLayout from "../../DashBoardLayout";
import { Button, Grid, TextField } from "@mui/material";
import DashboardHeader from "../../Components/DashboardHeader";
import TinyEditor from "../../Components/TinyEditor";
import NewPostCategory from "../../Components/NewPostCategory";
import NewPostStatuspublish from "../../Components/NewPostStatuspublish";
import UploadImage from "../../Components/UploadImage";

function page() {
  return (
    <DashBoardLayout>
      <DashboardHeader />
      <Grid
        component={"div"}
        container
        spacing={2}
        sx={{ marginTop: 1 }}
        display={"flex"}
        alignItems={"flex-start"}
      >
        <Grid item xs={12} lg={9}>
          <TinyEditor />
          <Button
          type="submit"
          variant="contained"
          sx={{ margin: 2,fontSize:"1.2rem", padding: "0.5rem 3rem", backgroundColor: "#0a9396" }}
        >
          {" "}
          ثبت
        </Button>
        </Grid>

        <Grid item xs={12} lg={3}>
          <TextField
            sx={{ width: "100%" }}
            disabled
            id="outlined-disabled"
            label="نویسنده"
            defaultValue="جواد بروجی"
          />
          <NewPostCategory />

          <NewPostStatuspublish />

          <UploadImage />
        </Grid>
     
      </Grid>
    </DashBoardLayout>
  );
}

export default page;
