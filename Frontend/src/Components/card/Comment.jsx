import { Box, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

export default function Comment() {
    return (
        <Box sx={{ paddingTop: "10px", borderTop: "1px solid gray", color: "#d3d0d0", fontSize: "20px" }} >
            257  Comments
            <Box sx={{ display: "flex", marginTop: "10px", gap: 5 }}>
                <Box><img style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "10px" }} src="https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg" alt="Dp" /></Box>
                <Box sx={{width:"100%"}}>
                    <Box sx={{ fontSize: "15px" }}>@amankashyap <span style={{ color: "gray" }}>1year ago</span></Box>
                    <TextField size='medium'color='success' sx={{minWidth:"50rem",marginTop:"10px",color:"white ",fontSize:"16px","& .MuiInputLabel-root":{color:'white',fontSize:""},"& .MuiInput-input":{color:"white",fontSize:"12px"}}} id="standard-basic" label="Add comment" variant="standard" />
                </Box>
            </Box>
        </Box>
    )
}
