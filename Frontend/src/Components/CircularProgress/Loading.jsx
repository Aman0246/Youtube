import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressVariants() {
  return (
    <Box sx={{ display: 'flex',position:"absolute" ,left:"55%" ,gap: 2, alignItems: 'center',justifyContent:"center",height:"100vh", flexWrap: 'wrap' }}>
      <CircularProgress variant="solid" />
   
    </Box>
  );
}