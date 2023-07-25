import Navbar from './Components/Navbar'
import './App.css'
import { Box } from '@mui/material'
import LeftDrawer from './Components/LeftDrawer'
import { Suspense, lazy, useState } from 'react'
import axios from "axios"
import Loading from "./Components/CircularProgress/Loading"
const RightSide =lazy(()=>import("./Components/RightSide"))
axios.defaults.baseURL = import.meta.env.VITE_port;
axios.defaults.withCredentials=true;
function App() {
  const [LeftDraweropen, setLeftDraweropen] = useState(true)

  return (
    <>

      <Navbar setLeftDraweropen={setLeftDraweropen} LeftDraweropen={LeftDraweropen} />
      <Box sx={{ display: "flex", gap: "0px" }}>
        {LeftDraweropen && <LeftDrawer/>}
        <Suspense fallback={<Loading/>}><RightSide setLeftDraweropen={setLeftDraweropen} LeftDraweropen={LeftDraweropen}/></Suspense>   
      </Box>

    </>
  )
}

export default App
