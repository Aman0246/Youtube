import React, { useEffect, useState } from 'react'
import Cardsection from '../Components/card/Cardsection'
import { Box } from '@mui/material'
import axios from "axios"

export default function Home({type}) {
  const [video, setvideo] = useState([])

  useEffect(() => {
    const fetchVideo = async() =>{
      await axios.get(`/videos/${type}`).then((data) => setvideo(data.data.data)).catch((error) => console.log(error))
    }
    fetchVideo()
  }, [type])

  return (
    <Box sx={{ display: 'flex', flexWrap: "wrap", gap: 5, justifyContent: 'center' }}>
      {video.map((data)=>(
        
        <Cardsection key={data._id} data={data} /> 

      ))}
     
    </Box>
  )
}
