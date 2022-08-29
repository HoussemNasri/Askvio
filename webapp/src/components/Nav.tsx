import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['LogIn', 'Sign Up'];

export default function Nav() {
    return (<Box sx={{ display: 'flex' }}>
        <AppBar component="nav" position="sticky">
            <Toolbar>
                <Box sx={{display: 'flex', flexGrow: 1}}>
                    <Button sx={{color : '#fff'}}>
                        Askvio™
                    </Button>
                </Box>
                <Box>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff'}}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    </Box>)
}