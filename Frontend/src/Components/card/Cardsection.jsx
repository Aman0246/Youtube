import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from '@emotion/styled';

const Cards=styled(Card)({
 width:"35rem",
 backgroundColor:"black"

})
const Title=styled(Typography)({
  fontWeight:600,
  fontSize:"1.5rem"

})
const Creater=styled(Typography)({
  
  fontSize:"1.2rem",
  color:'grey'

})
const Logo=styled('img')({
width:"30px",
height:"30px",
borderRadius:"50%"

})
const Discription=styled(Box)({
display:"flex",
gap:8,
color:"white",


})

export default function Cardsection() {
  return (
    <Cards >
        <CardMedia   sx={{ height: 140,margin:"10px",borderRadius:"10px" }} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBF0NNxKH9UxFFpDumDVFLGmOjH5aO8AaeQ&usqp=CAU'  title="green iguana"/>
        <CardContent>
          
          <Discription>
          <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtJn0ft-vy6PiybY9DWv_3FjZQIhNWQvOVg&usqp=CAU" alt="DP"/>
              <Box sx={{display:"flex",flexDirection:"column",gap:1}}>

            <Title>Lorem ipsum dolor sit ame con sec tetr adipisicing </Title>
            <Creater>Lorem ipsum dolor sit amet</Creater>
            <Typography sx={{color:'gray'}}>600 Views 1 day ago</Typography>
              </Box>
          </Discription>

            
   
        </CardContent>
    </Cards>
  )
}
