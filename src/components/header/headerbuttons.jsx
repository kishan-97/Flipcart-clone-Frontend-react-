import {Box,Button,Typography,Badge} from '@mui/material';
import ShoppingCart from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';
import LoginDialog from '../login/login';
import {useState,useContext} from 'react';
import {LoginContext} from '../../context/loginContext';
import Profile from './profile';

const classes={
    login:{
        background:'white',
        color:'#2874f0',
        textTransform:'none',
        fontWeight:600,
        borderRadius:2,
        padding:'5px 40px',
        marginRight:50,
        fontSize:12,
        alignItem:'center',
        boxShadow:'none'

    },
    wrapper:{
        margin:'0 7% 0 auto',
        display:'flex',
    }
    ,
    but:{
        marginRight:50,
        fontSize:12,
        alignItem:'center'
    },
    container:{
        display:'flex',
        textDecoration:'none',
        color:'#ffffff'
    }
};

const HeaderButtons=()=>{

    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(LoginContext);
    const openLogin=()=>{
        setOpen(true);
    }
   
    return(
    <Box style={classes.wrapper}>
        {
           account ? 
            <Profile style={classes.but} account={account} setAccount={setAccount}></Profile>
            :
            <Button variant='contained' style={classes.login} onClick={()=>openLogin()} >Login</Button>
        }
      <Typography style={{...classes.but,marginTop:5}}>More</Typography>
            <Link to='/cart' style={classes.container}>
            <Badge badgeContent={2} color="error">
            <ShoppingCart/>
            
            </Badge>
                <Typography style={{...classes.but,marginLeft:10,marginTop:5}}>Cart</Typography>
            </Link>
            <LoginDialog setAccount={setAccount} open={open} setOpen={setOpen}></LoginDialog>
    </Box>
)
}

export default HeaderButtons;