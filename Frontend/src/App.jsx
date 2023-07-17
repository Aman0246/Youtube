import Navbar from './Components/Navbar'
import './App.css'
import { Box } from '@mui/material'
import LeftDrawer from './Components/LeftDrawer'
import { useState } from 'react'
import RightSide from './Components/RightSide'
function App() {
  const [LeftDraweropen, setLeftDraweropen] = useState(true)

  return (
    <>

      <Navbar setLeftDraweropen={setLeftDraweropen} LeftDraweropen={LeftDraweropen} />
      <Box sx={{ display: "flex", gap: "0px" }}>
        {LeftDraweropen && <LeftDrawer/>}
        <RightSide setLeftDraweropen={setLeftDraweropen} LeftDraweropen={LeftDraweropen}  >
        </RightSide>
      
      </Box>

    </>
  )
}

export default App
