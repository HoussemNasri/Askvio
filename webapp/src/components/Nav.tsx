import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link as RouterLink, BrowserRouter as Router, NavLink} from "react-router-dom";
import {StaticRouter} from "react-router-dom/server";

type NavItem = {
    displayName: string;
    path: string;
}

export default function Nav() {
    return (<Box sx={{display: 'flex'}}>
        <AppBar component="nav" position="sticky">
            <Toolbar>
                <Box sx={{display: 'flex', flexGrow: 1}}>
                    <Button component={RouterLink} to='/' sx={{color: '#fff'}}>
                        Askvio™
                    </Button>
                </Box>
                <Box>
                    <Button component={RouterLink} to='/login' sx={{color: '#fff'}}>
                        Log In
                    </Button>
                    <Button component={RouterLink} to='/signup' sx={{color: '#fff'}}>
                        Sign Up
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>)
}