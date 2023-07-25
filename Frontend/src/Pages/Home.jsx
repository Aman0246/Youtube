import React, { useEffect, useState } from 'react'
import Cardsection from '../Components/card/Cardsection'
import { Box } from '@mui/material'
import axios from "axios"
import Loading from "../Components/CircularProgress/Loading"

export default function Home({type}) {
  const [video, setvideo] = useState([])
  let [Loadinga,setLoading]=useState(false)
  
  useEffect(() => {
    setLoading(true)
    const fetchVideo = async() =>{
      await axios.get(`/videos/${type}`).then((data) => {
       
        setvideo(data.data.data)
        setLoading(false)
      }).catch((error) => console.log(error))
    }
    fetchVideo()
  }, [type])
  return (
    <Box sx={{ display: 'flex', flexWrap: "wrap", gap: 5, justifyContent: 'center' }}>
     {Loadinga?<Loading/>:""}
      {video.map((data)=>(
        
        <Cardsection key={data._id} data={data} /> 

      ))}
     
    </Box>
  )
}
