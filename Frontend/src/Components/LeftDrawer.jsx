import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { categories } from './iconList';

export default function LeftDrawer() {
    const Drawers = styled(Box)({
        background: "black",
        width: "30rem",
        overflowY: "scroll",
        height: "91vh",
        color: "#f1f1f1",
        alignItems: "Left",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding:"10px 0px",
        

    })
    const Icons = styled(Typography)({

        '&>svg': {
            fontSize: "300%",
            margin: "auto 5px 0 auto",
            color:"white",
            marginLeft:"0px",
            "@media (max-width:923px)":{
                fontSize: "200%",
            },
            "@media (max-width:602px)":{
                fontSize: "150%",
            }
        }

    })
    const ListItems=styled(Box)({
        backgroundColor:"black",boxShadow:"none",borderRadius:"5px",cursor:"pointer",padding:"0px 10px",margin:"1px 0px", display: "flex", alignItems: "center", justifyContent: "flex-start",border:"none",'&:hover':{backgroundColor:"#2c2323"} ,
    })
    return (
        <Drawers>
            {categories[0] && categories.map(e => (
                <ListItems><Icons >{e.icon}</Icons><Typography sx={{color:"white",fontSize: "100%", "@media (max-width:697px)":{
                    fontSize: "80%",
                } ,"@media (max-width:602px)":{
                    fontSize: "50%",
                }}}>{e.name}</Typography></ListItems>
            ))}
        </Drawers>

    )
}
