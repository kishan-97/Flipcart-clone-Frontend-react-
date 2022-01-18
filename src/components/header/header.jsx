import {AppBar,Toolbar,Typography,Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchBar from './searchbar';
import HeaderButtons from './headerbuttons';
import {Link} from 'react-router-dom';

const useStyle=makeStyles({
    header:{
        height:'55px'
    },
    logo:{
        width:'75px'
    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex',
        margin:'-5px'
    },
    component:{
        marginLeft:'12%',
        textDecoration:'none',
        color:'#ffffff'
        
    },
    subheading:{
        fontSize:10,
        fontStyle:'italic'
        
    }
})
const Header=()=>{
    const classes=useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';



return (
    <AppBar style={{background:'#2874f0'}} className={classes.header}>
    <Toolbar>
        <Link to='/' className={classes.component}>
            <img className={classes.logo} src={logoURL}></img>
            <Box className={classes.container}>
                <Typography style={{fontSize:10}} className={classes.subheading}>Explore <span style={{color:'#ffe500'}}>Plus</span></Typography>
                <img className={classes.subURL} src={subURL}></img>
            </Box>
        </Link>
    <SearchBar></SearchBar>
    <HeaderButtons></HeaderButtons>
    </Toolbar>
    </AppBar>
)
}


export default Header;