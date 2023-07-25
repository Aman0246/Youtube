import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';
import toast from "react-hot-toast"
import { useDispatch,} from 'react-redux'
import { addLoginUser } from '../REDUX/LoginSlice';
import GoogleIcon from '@mui/icons-material/Google';
//====================================================
import {auth,provider} from "../Components/Firebase/Firebase"
import {signInWithPopup} from "firebase/auth"
//====================================================
// export const auth = getAuth()
// export const provider = new GoogleAuthProvider()




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


export default function Login() {
  // const Selctor=useSelector(state=>state)
  // console.log(Selctor)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  let [inputs,setInputs]=useState({
    email:"",
    password:""
  })
  let handleChange=(e)=>{
    e.preventDefault()
    setInputs({...inputs,[e.target.name]:e.target.value})
  }
  const handleSubmitt=async()=>{
    if(!validator.isEmail(inputs.email)) return toast.error("Invalid Email")
    if(inputs.password.length==0)return toast.error("Invalid Password")
    else{
      await axios.post("/auth/signin",inputs).then((e)=>{console.log(e.data)
      if(e.data.status==false){ 
        if(e.data.message!="Worng Password") {
          navigate("/signup")
        }
        return toast.error(e.data.message)
      }
    else{
      toast.success(e.data.message)
      dispatch(addLoginUser(e.data.data))
      navigate("/random")

    }
    }
      )
    }
  }
  const signInWithGoogle=()=>{
  
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result)
      axios.post("/auth/google",{name:result.user.displayName,email:result.user.email,img:result.user.photoURL}).then((e)=>{
        // console.log(e.data.data)
        dispatch(addLoginUser(e.data.data))
        navigate("/random")
      })
    }).catch((e)=>{console.log(e)})

  }
  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:'center',width:"100%",marginTop:"10px",flexDirection:'column',height:"98vh"}}>
      <Box sx={{display:'flex',justifyContent:"center",borderRadius:"10px",alignItems:'center',backgroundColor:"white","@media (max-width:900px)":{width:"70%"},width:"30%",flexDirection:'column'}} >
            <Box sx={{position:"relative"}}> <img style={{width:80, height:80,borderRadius:"50%"}} src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt="Dp" />
                     </Box>

          <TextFields required  sx={{display:"flex",gap:3 ,flexDirection:"column",justifyContent:"center",alignItems:'Left',width:"90%"}}>
        <TextField required  id="standard-basic" type='email' name='email' label="Email" onChange={(e)=>handleChange(e)} variant="standard" />
         <TextField required  id="standard-basic" name='password' onChange={(e)=>handleChange(e)} label="Password" variant="standard" />
          </TextFields>
          <Button sx={{marginTop:"10px",fontSize:"16px"}} onClick={handleSubmitt} variant="contained">Login</Button>
          <Typography sx={{color:"black",fontSize:"15px"}}>--- or ---</Typography>
          {/* //=================================================== */}
          <Button variant="contained" color='primary'  onClick={signInWithGoogle}> <GoogleIcon/>..  Signin with Google </Button>
          {/* //=================================================== */}
<Link to={"/signup"}>

          <Button sx={{marginTop:"10px",fontSize:"16px",paddingX:"2rem",backgroundColor:"green",margin:"10px"}} variant="contained">go to Signup</Button>
</Link>

      </Box>
    </Box>
  )
}
