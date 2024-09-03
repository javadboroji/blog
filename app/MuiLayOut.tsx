"use client";
import React from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { colors } from "@mui/material";

const theme = (outerTheme: Theme) =>
  createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "iranSans",
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
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
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline ": {borderColor:"rgb(20 33 61)"},
          },
        },
      },
    },
  });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function MuiLayOut({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <div>{children}</div>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MuiLayOut;
