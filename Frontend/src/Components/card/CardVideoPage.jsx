import { Box, Typography } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import styled from '@emotion/styled';

const Cards=styled(Box)({
 width:"100%",
 backgroundColor:"black",
 display:'flex',
 justifyContent:"center",
 padding:"10px  "
})
const Title=styled(Typography)({
  fontWeight:600,
  fontSize:"1.5rem"

})
const Creater=styled(Typography)({
  
  fontSize:"1.2rem",
  color:'grey',
  alignItems:"center",
  display:'flex',
  

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

export default function CardVideoPage() {
  return (
    <Cards >
      <Box sx={{display:'flex'}}>
        <img style={{width:"100%",borderRadius:'10px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBF0NNxKH9UxFFpDumDVFLGmOjH5aO8AaeQ&usqp=CAU'/>
      </Box>

        <CardContent>
          
          <Discription>
              <Box sx={{display:"flex",flexDirection:"column",gap:1}}>

            <Title>Lorem ipsum dolor sit ame con sec tetr adipisicing </Title>
            <Creater>Lorem ipsum <CheckCircleRoundedIcon sx={{marginLeft:"10px"}}/> </Creater>
            <Typography sx={{color:'gray'}}>600 Views 1 day ago</Typography>
              </Box>
          </Discription>

            
   
        </CardContent>
    </Cards>
  )
}
