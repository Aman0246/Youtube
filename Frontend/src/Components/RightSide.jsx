import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

export default function RightSide({LeftDraweropen}) {
  console.log(LeftDraweropen)
    const RightSide=styled(Box)({
       minWidth:LeftDraweropen?"81.8%":"100%",
       backgroundColor:"black"
    })
  return (
    <RightSide>
      Right
    </RightSide>
  )
}
