import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from '@emotion/styled';
import { format } from 'timeago.js';
import axios from 'axios';

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

export default function Cardsection({data}) {
  const [Channel, setChannel] = useState({})

  useEffect(() => {
    const fetchVideo = async() =>{
      await axios.get(`/users/find/${data.userId}`).then((userID) => setChannel(userID.data.data)).catch((error) => console.log(error))
    }
    fetchVideo()
  }, [data.userId])

  // console.log(Channel)
  return (
    <Cards >
        <CardMedia   sx={{ height: 140,margin:"10px",borderRadius:"10px" }} image={'https://mir-s3-cdn-cf.behance.net/projects/404/b3e660144469961.628d07f3c9140.png'}title="Video is loading"/>
        <CardContent>
          
          <Discription>
          <Logo src={Channel.img||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtJn0ft-vy6PiybY9DWv_3FjZQIhNWQvOVg&usqp=CAU"} alt="DP"/>
              <Box sx={{display:"flex",flexDirection:"column",gap:1}}>

            <Title>{data.title}</Title>
            <Creater>{Channel.name}</Creater>
            <Typography sx={{color:'gray'}}>{data.views}views . {format(data.createdAt)} </Typography>
              </Box>
          </Discription>

            
   
        </CardContent>
    </Cards>
  )                       
}
