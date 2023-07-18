import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Signup =lazy(()=>import('../Pages/Registratin'))
const Login =lazy(()=>import('../Pages/Login'))
const Home =lazy(()=>import("../Pages/Home"))
const VideoPage =lazy(()=>import('../Pages/VideoPage'))

export default function RightSide({LeftDraweropen}) {
  console.log(LeftDraweropen)
    const RightSide=styled(Box)({
      flex:2,
       minWidth:LeftDraweropen?"81.8%":"100%",
       backgroundColor:"black",
       color:"#f1f1f1"
    })
  return (
    <RightSide>
    <Routes>
            <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home/></Suspense>}></Route>
            <Route path='/video/:id' element={<Suspense fallback={<div>Loading...</div>}><VideoPage LeftDraweropen={LeftDraweropen}/></Suspense>}></Route>
            <Route path='/signup' element={<Suspense fallback={<div>Loading...</div>}><Signup/></Suspense>}/>
            <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>}/>
          </Routes>
    </RightSide>
  )
}
