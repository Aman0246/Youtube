import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Signup =lazy(()=>import('../Pages/Registratin'))
const Login =lazy(()=>import('../Pages/Login'))
const Home =lazy(()=>import("../Pages/Home"))
const VideoPage =lazy(()=>import('../Pages/VideoPage'))
import Loading from "../Components/CircularProgress/Loading"

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
            <Route path='/random' element={<Suspense fallback={<Loading/>}><Home type="random"/></Suspense>}></Route>
            <Route path='/' element={<Suspense fallback={<Loading/>}><Home type="random"/></Suspense>}></Route>
            <Route path='/trends' element={<Suspense fallback={<Loading/>}><Home type="trend"/></Suspense>}></Route>
            <Route path='/sub' element={<Suspense fallback={<Loading/>}><Home type="sub"/></Suspense>}></Route>
            <Route path='/video/:id' element={<Suspense fallback={<Loading/>}><VideoPage LeftDraweropen={LeftDraweropen}/></Suspense>}></Route>
            <Route path='/signup' element={<Suspense fallback={<Loading/>}><Signup/></Suspense>}/>
            <Route path='/login' element={<Suspense fallback={<Loading/>}><Login/></Suspense>}/>
          </Routes>
    </RightSide>
  )
}
