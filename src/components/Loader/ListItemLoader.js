import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function ListItemLoader() {
  return (
    <Box>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  )
}
