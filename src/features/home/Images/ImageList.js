import { Grid } from '@mui/material'
import React from 'react'
import ImageCard from '../../../common/ImageCard'

const ImageList = ({images}) => {
     const renderedImages=images.map(image=> <Grid  item key={image.id} xs={12} sm={6} md={4} lg={3} >
         <ImageCard  image={image} />
         </Grid>
         )
    
  return (
    <Grid container spacing={2}>
      {renderedImages}
    </Grid>
  )
}

export default ImageList

