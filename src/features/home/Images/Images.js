
import { Box, Typography } from '@mui/material'
import React from 'react'
import { COLORS } from '../../../theme'
import ImageList from './ImageList'
// https://i.ibb.co/wd0PWDm/img-9.jpg
// https://i.ibb.co/frwdHD6/img-10.jpg
// https://i.ibb.co/2sT7fN6/img-1.jpg
// https://i.ibb.co/r6vFPXx/img-2.jpg

// https://i.ibb.co/r6hSMTF/img-3.jpg
// https://i.ibb.co/Wf8LbZy/img-4.jpg
// https://i.ibb.co/LNb2wbH/img-5.jpg
// https://i.ibb.co/MRJXF5F/img-6.jpg
// https://i.ibb.co/R2ZMW9G/img-7.jpg
// https://i.ibb.co/x5BH8TW/img-8.jpg

const loadImages=[
    {
        id:1,
        url:'https://i.ibb.co/wd0PWDm/img-9.jpg'
    },
    {
        id:2,
        url:'https://i.ibb.co/2sT7fN6/img-1.jpg'
    },
    {
        id:3,
        url:'https://i.ibb.co/frwdHD6/img-10.jpg'
    },
    {
        id:4,
        url:'https://i.ibb.co/r6vFPXx/img-2.jpg'
    },
    {
        id:5,
        url:'https://i.ibb.co/r6hSMTF/img-3.jpg'
    },
    {
        id:6,
        url:'https://i.ibb.co/Wf8LbZy/img-4.jpg'
    },
    {
        id:7,
        url:'https://i.ibb.co/LNb2wbH/img-5.jpg'
    },
    {
        id:8,
        url:'https://i.ibb.co/MRJXF5F/img-6.jpg'
    },
    {
        id:9,
        url:'https://i.ibb.co/R2ZMW9G/img-7.jpg'
    },
    {
        id:10,
        url:'https://i.ibb.co/x5BH8TW/img-8.jpg'
    }

]

const Images = () => {
    
    
  return (
    <Box
    sx={{
        maxWidth: "1300px",
        width: "90%",
        margin: "0 auto",

    }}
    >
        <Typography 
        variant='h5'
        color={COLORS.black}
        fontWeight={'bold'}
        margin={'10px'}
        >
              IMAGE GALLERY 
        </Typography>
        <ImageList images={loadImages} />
        
    </Box>
  )
}

export default Images