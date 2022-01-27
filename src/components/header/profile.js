import {Typography,Menu,MenuItem} from '@mui/material';
import {useState} from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Profile=({account,setAccount})=>{
    const [open,setOpen]=useState(false);

    const handleClose=()=>{
        setOpen(false);
    }
    const handleClick=(event)=>{
        console.log(event.currentTarget);
        setOpen(event.currentTarget);
    }

    const classes={
        component:{
            marginTop:10
        }
    }
    const logout=()=>{
        setAccount('');
    }
    return(
        <>
            <Typography onClick={handleClick} style={{marginRight:10,cursor:'pointer'}}>{account}</Typography>
            <Menu
            style={classes.component}
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}}><PowerSettingsNewIcon></PowerSettingsNewIcon>&nbsp; Logout </MenuItem>
            </Menu>
        </>
    )
}


export default Profile;