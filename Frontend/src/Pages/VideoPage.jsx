import { Box } from '@mui/material'
import React from 'react'
import CardVideoPage from '../Components/card/CardVideoPage'
import VideoPlay from '../Components/card/VideoPlay'


export default function VideoPage({LeftDraweropen}) {
  return (
    <Box sx={{display:'flex','@media (max-width: 850px)':{flexDirection:"column"},'@media (max-width: 1030px)': LeftDraweropen &&  {flexDirection:"column"}}}>
      <Box sx={{flex:2,background:"black",alignItems:'center'}}>
       <VideoPlay/>
      
      </Box>
      <Box sx={{flex:1,overflowY:"scroll",overflowX:"hidden",height:'100vh',display:'flex',flexDirection:'column',gap:3}}>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
    <CardVideoPage/>
      </Box>
      
    </Box>
  )
}
