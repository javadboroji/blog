import React from 'react'
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = (outerTheme: Theme) =>
  createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'iranSans',
      },
  });

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
function MuiLayOut({children}:{children: React.ReactNode}) {
  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
        <div>
            {children}
        </div>
  </ThemeProvider>
</CacheProvider>
  )
}

export default MuiLayOut