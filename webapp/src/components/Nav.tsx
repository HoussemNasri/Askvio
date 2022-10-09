import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link as RouterLink, BrowserRouter as Router, NavLink} from "react-router-dom";
import {StaticRouter} from "react-router-dom/server";
import {getCurrentAccessToken} from "../services/AuthService";
import {Container, IconButton, InputBase} from "@mui/material";
import {AccountCircle, Explore, Notifications, Search as SearchIcon} from "@mui/icons-material";
import {styled, alpha} from '@mui/material/styles';
import {useAppSelector} from "../redux/app/hooks";
import {getAuthState} from "../redux/authSlice";

type NavItem = {
    displayName: string;
    path: string;
}

export default function Nav() {
    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const isAuthenticated = useAppSelector(getAuthState).isAuthenticated

    return (<Box sx={{display: 'flex'}}>
        <AppBar component="nav" position="sticky">
            <Toolbar>
                <Box sx={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
                    <Button component={RouterLink} to='/' sx={{color: '#fff'}}>
                        Askvio™
                    </Button>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    {
                        isAuthenticated && <Button component={RouterLink} to='/explore' startIcon={<Explore/>} sx={{color: '#fff'}}>
                            Explore
                        </Button>
                    }
                </Box>

                <Box>
                    {
                        !isAuthenticated && <Button component={RouterLink} to='/login' sx={{color: '#fff'}}>
                            Log In
                        </Button>
                    }
                    {
                        !isAuthenticated && <Button component={RouterLink} to='/signup' sx={{color: '#fff'}}>
                            Sign Up
                        </Button>
                    }
                    {
                        isAuthenticated && <IconButton sx={{
                            color: '#fff'
                        }}>
                            <Notifications/>
                        </IconButton>
                    }
                    {
                        isAuthenticated && <Box sx={{display: 'inline'}}>
                            <IconButton sx={{
                                color: '#fff'
                            }}>
                                <AccountCircle/>
                            </IconButton>
                        </Box>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    </Box>)
}