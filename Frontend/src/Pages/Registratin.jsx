import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios"
import validator from 'validator';

const TextFields = styled(Box)({
  "& .MuiInputLabel-root": {
    fontSize: "16px",
    color: "Black"
  },
  "& .MuiInput-input": {
    color: "black",
    fontSize: "16px"
  }
})

const initaialvalue = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  img: "",
}
export default function Registratin() {
  const navigate=useNavigate()

  let [inputs, setinputs] = useState(initaialvalue)

  const handleChange = (e) => {
    e.preventDefault()
    setinputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(inputs)
    if (inputs.name.length == 0 || inputs.email.length == 0) return toast.error("Empty filed")
    if (inputs.password != inputs.cpassword||inputs.password.length==0||inputs.cpassword.length==0) return toast.error("Password not matched")
    if(!validator.isEmail(inputs.email)) return toast.error("Invalid Email")
    if(inputs.number.length!=10)return toast.error("only 10 digits")
    try {
      await axios.post("/auth/signup",inputs).then((e)=>{
        if(e.data.status== true){
          toast.success(e.data.message)
          navigate("/login")
        }
        else{
          toast.error(e.data.message)
        }
        console.log(e)})
    } catch (error) {
      console.log(error)
      
    }
    
   
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', width: "100%", marginTop: "10px", flexDirection: 'column', height: "98vh" }}>
      <Box sx={{ display: 'flex', justifyContent: "center", borderRadius: "10px", alignItems: 'center', backgroundColor: "white", width: "30%", "@media (max-width:900px)": { width: "70%" }, flexDirection: 'column' }} >
        <Box sx={{ position: "relative" }}> <img style={{ width: 80, height: 80, borderRadius: "50%" }} src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt="Dp" />
          <AddAPhotoIcon sx={{ position: "absolute", color: "#4a7700", cursor: "pointer", bottom: 16, right: 11, fontSize: "21px" }} />
        </Box>

        <TextFields sx={{ display: "flex", gap: 3, flexDirection: "column", justifyContent: "center", alignItems: 'Left', width: "90%" }}>
          <TextField required id="standard-basic" onChange={(e) => handleChange(e)} name='name' label="Name" variant="standard" />
          <TextField required id="standard-basic" onChange={(e) => handleChange(e)} name='email' type='email' label="Email" variant="standard" />
          <TextField required id="standard-basic" onChange={(e) => handleChange(e)} type='number' name='number' label="Phone" variant="standard" />
          <TextField required id="standard-basic" onChange={(e) => handleChange(e)} label="Password" name='password' variant="standard" />
          <TextField required id="standard-basic" onChange={(e) => handleChange(e)} label="Confirm Password" name='cpassword' variant="standard" />
        </TextFields>
        <Button type='submit' onClick={handleSubmit} sx={{ marginTop: "10px", fontSize: "16px" }} variant="contained">Signup</Button>
        <Typography sx={{ color: "black", fontSize: "15px" }}>--- or ---</Typography>
        <Link to={"/login"}>

          <Button sx={{ marginTop: "10px", fontSize: "16px", paddingX: "2rem", backgroundColor: "green", margin: "10px" }} variant="contained">go to Login</Button>
        </Link>




      </Box>
    </Box>
  )
}
