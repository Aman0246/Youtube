import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Comment from './Comment';

const Cards=styled(Card)({
 width:"100%",
 backgroundColor:"black"
})
const Title=styled(Typography)({
  fontWeight:600,
  fontSize:"1.5rem",
  color:"white",
  marginBottom:'5px'

})
const Creater=styled(Typography)({
  
  fontSize:"1.5rem",
  color:'white'

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
"@media (max-width: 700px)":{flexDirection:'column'}


})

export default function VideoPlay() {
  return (
    <Cards >
        <CardMedia   sx={{ height:"50rem",margin:"10px",borderRadius:"10px",'@media (max-width: 500px)':{height:"30rem"},'@media (max-width: 300px)':{height:"25rem"} }} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBF0NNxKH9UxFFpDumDVFLGmOjH5aO8AaeQ&usqp=CAU'  title="play video"/>
        <CardContent>
          
            <Title>Lorem ipsum dolor sit ame con sec tetr adipisicing </Title>
            <Box sx={{display:'flex',justifyContent:"space-between", marginBottom:"3px"}}>

          <Discription>
            
          <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtJn0ft-vy6PiybY9DWv_3FjZQIhNWQvOVg&usqp=CAU" alt="DP"/>
              <Box sx={{display:"flex",flexDirection:"column",gap:1}}>

            <Creater>Lorem ipsum dolor sit amet</Creater>
            <Typography sx={{color:'gray',fontSize:"13px"}}>600 Views 1 day ago</Typography>
              </Box>
          </Discription>
          <Box sx={{marginX:"10px",justifyContent:"space-between","@media (max-width: 700px)":{flexDirection:'column'},alignItems:"center",display:'flex',}}>
            <Button  variant='outlined' sx={{marginX:"10px",backgroundColor:"red",color:"white"}}>Subscribe</Button>
            <ButtonGroup sx={{backgroundColor:"gray",borderRadius:"10%"}}>
            <Button sx={{'&>svg':{color:"white",marginRight:"2px"},color:"white",fontSize:"10px"}}><ThumbUpIcon/> 150</Button>
            <Button sx={{'&>svg':{color:"white",marginRight:"2px"},color:"white",fontSize:"10px"}}><ThumbDownAltIcon/> 150</Button>

            </ButtonGroup>     
          </Box>
            </Box>
            <Comment/>  
        </CardContent>
    </Cards>
  )
}
