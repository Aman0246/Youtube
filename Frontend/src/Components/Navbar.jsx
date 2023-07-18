import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
export default function Navbar({ LeftDraweropen, setLeftDraweropen }) {
    const Searchbar = styled(InputBase)({
        width: "90%",
        fontSize: "2rem",
        padding: "1px 10px",
        color: "white",
        minWidth: "70px",
        borderRadius: "2rem",
        height: "4rem",
        "@media  (max-width :522px)": {
            marginLeft: "-2px",
            height: "2rem"
        }
    })
    const FullBox = styled(Box)(
        {
            display: "flex", justifyContent: "space-between", gap: "1rem", width: "100%", padding: ".5rem .7rem .5rem .8rem",
            "@media (min-width:700) and (max-width :768px)": {}
        })
    const Box1 = styled(Box)({
        display: "flex", marginLeft: "0rem", alignItems: "center",
        color:"white",
        "&>svg": {
            fontSize: "3rem",
            color: "red",
            "@media  (max-width :522px)": {
                fontSize: "2rem",
            }
        },
        "@media  (max-width :522px)": {
            marginLeft: "-2px",
        }
    })
    const Box2 = styled(Box)({
        width: "40%", border: "1px solid gray", display: "flex", margin: "auto", justifyContent: "center", alignItems: "center", padding: "5px",
        borderRadius: "5rem", fontSize: "16px",
        "&>svg": {
            fontSize: "3rem",
            "@media  (max-width :522px)": {
                fontSize: "2rem",

            }
        },
        "@media (min-width:700) and (max-width :768px)": {}
    })
    const Box3 = styled(Box)({
        display: "flex", gap: "2rem", marginRight: "2rem", justifyContent: "center", alignItems: "center",
        "&>svg": {
            fontSize: "3rem",
            alignItems:"center",
            "@media  (max-width :522px)": {
                fontSize: "2rem",
                gap: "1rem",
                marginRight: "-6px",


            }
        },
        "@media (min-width:700) and (max-width :768px)": {}
    })

    return (
        <AppBar sx={{ width: "100%" }} position="sticky" >
            <Toolbar sx={{ background: "black" }}>
                <FullBox >
                   
                    <Box1 ><MenuIcon onClick={() => { setLeftDraweropen(!LeftDraweropen), console.log(LeftDraweropen) }} style={{ color: "white", marginRight: "1rem" }} /> <Link  to={"/"} style={{textDecoration:"none"}}><Box1><YouTubeIcon /><Typography sx={{ fontSize: "3rem", "@media (max-width :522px)": { display: "none" } }}>YouTube</Typography></Box1></Link></Box1>
                    <Box2><Searchbar placeholder='Search...' sx={{}} /><SearchIcon sx={{ borderLeft: "1px solid gray", paddingLeft: "3px" }} /></Box2>
                    <Box3><VideoCameraBackIcon /><NotificationsIcon /> <Link to={"/login"} style={{textDecoration:"none !important"}}><AccountCircleIcon sx={{color:"white",fontSize:"3rem"}} titleAccess='Signup' /> </Link>  </Box3>

                </FullBox>
            </Toolbar>
        </AppBar>

    )
}
