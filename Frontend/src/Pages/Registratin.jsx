import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TextFields=styled(Box)({
  "& .MuiInputLabel-root":{
    fontSize:"16px",
    color:"Black"
  },
  "& .MuiInput-input":{
    color:"black",
    fontSize:"16px"
  }


})


export default function Registratin() {
  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:'center',width:"100%",marginTop:"10px",flexDirection:'column',height:"98vh"}}>
      <Box sx={{display:'flex',justifyContent:"center",borderRadius:"10px",alignItems:'center',backgroundColor:"white",width:"30%","@media (max-width:900px)":{width:"70%"},flexDirection:'column'}} >
            <Box sx={{position:"relative"}}> <img style={{width:80, height:80,borderRadius:"50%"}} src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt="Dp" />
            <AddAPhotoIcon sx={{position:"absolute",color:"#4a7700",cursor:"pointer",bottom:16,right:11,fontSize:"21px"}}/>
            </Box>

          <TextFields sx={{display:"flex",gap:3 ,flexDirection:"column",justifyContent:"center",alignItems:'Left',width:"90%"}}>
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" type='email' label="Email" variant="standard" />
        <TextField id="standard-basic" type='number' label="Phone" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <TextField id="standard-basic" label="Confirm Password" variant="standard" />
          </TextFields>
          <Button sx={{marginTop:"10px",fontSize:"16px"}} variant="contained">Signup</Button>
          <Typography sx={{color:"black",fontSize:"15px"}}>--- or ---</Typography>
<Link to={"/login"}>

          <Button sx={{marginTop:"10px",fontSize:"16px",paddingX:"2rem",backgroundColor:"green",margin:"10px"}} variant="contained">go to Login</Button>
</Link>


                  

      </Box>
    </Box>
  )
}
