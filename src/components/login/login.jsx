import {Dialog,DialogContent, Typography,Button} from '@mui/material';
import {TextField} from '@material-ui/core';
import {Box} from '@mui/material';
import {useState} from 'react';

const classes={
    component:{
        height:'70vh',
        width:'90vh',
        padding:0
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        width:'40%',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#2874f0',
        height:'70vh',
        backgroundPosition:'center 85%',
        padding:0
    },
    login:{
        padding:'25px 35px',
        display:'flex',
        flexDirection:'column',
        flex:1
    }
    
}

const initialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'Looks like you\'re new here!',
        subHeading:'Sign up with your mobile number to get started'
    }

}

const Login=({open,setOpen})=>{
    const [account,setAccount]=useState(initialValue.login);

    const toggleAccount=()=>{
        setAccount(initialValue.signup);
    }
    const handleClose=()=>{
        setOpen(false);
        setAccount(initialValue.login)
    }


    return(
        <>
            <Dialog open={open} onClose={()=>handleClose()}>
                <DialogContent  style={classes.component}>
                    <Box style={{display:'flex'}}>
                        <Box style={{...classes.image,padding:'45px 35px'}}>
                            <Typography variant ='h5' style={{fontWeight:600,color:'#ffffff'}} >{account.heading}</Typography>
                            <Typography style={{fontWeight:600,color:'#ffffff',marginTop:15}}>{account.subHeading}</Typography>
                        </Box>
                        {
                            account.view==='login' ?
                        
                        <Box style={classes.login}>
                            <TextField style={{marginTop:20}} name='username' label='Enter Email/Mobile Number'></TextField>
                            <TextField style={{marginTop:20}} name='password' label='Enter Password'></TextField>
                            <Typography style={{marginTop:20,fontSize:12,color:'#878787'}} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant='contained' style={{marginTop:20,textTransform:'none',background:'#fb641b',color:'#ffffff',height:48,borderRadius:2}} >Login</Button>
                            <Typography style={{marginTop:20,textAlign:'center',fontSize:12,color:'#878787'}} >OR</Typography>
                            <Button variant='contained' style={{marginTop:20,textTransform:'none',fontWeight:600,boxShadow:'0px 2px 4px 0px rgba(0,0,0,0.2)',background:'#ffffff',color:'#2874f0',height:48,borderRadius:2}} >Request OTP</Button>
                            <Typography onClick={()=>toggleAccount()} style={{marginTop:'auto',textAlign:'center',fontSize:14,fontWeight:600,color:'#2874f0',cursor:'pointer'}}>New to Flipcart? Create an Account</Typography>
                        </Box>
                        :
                        <Box style={classes.login}>
                            <TextField name='firstname' label='Enter Email/Mobile Number'></TextField>
                            <TextField style={{marginTop:15}} name='lastname' label='Enter Password'></TextField>
                            <TextField style={{marginTop:15}} name='username' label='Enter Password'></TextField>
                            <TextField style={{marginTop:15}} name='email' label='Enter Password'></TextField>
                            <TextField style={{marginTop:15}} name='password' label='Enter Password'></TextField>
                            <TextField style={{marginTop:15}} name='phone' label='Enter Password'></TextField>
                            <Button variant='contained' style={{marginTop:20,textTransform:'none',background:'#fb641b',color:'#ffffff',height:48,borderRadius:2}} >Signup</Button>
                        </Box>
                        }
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login;