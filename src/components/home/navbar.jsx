import {navData} from '../../constants/Data';
import {Box,Typography} from '@mui/material';

const classes={
    component:{
        display:'flex',
        flexDirection:'row',
        margin:'55px 130px 0 0',
        justifyContent:'space-between'
    },
    container:{
        textAlign:'center',
        padding:'12px 8px'
    },
    image:{
        width:64
    },
    text:{
        fontSize:14,
        fonWeight:400

    }
}
const Navbar=()=>{
    return(
        <>
        <Box style={classes.component}>
            {navData.map(item=>{
                return(
                <Box style={classes.container}>
                <img style={classes.image} src={item.url}></img>
                <Typography style={classes.text} >{item.text}</Typography>
                </Box>
                )
            })}
        </Box>
        </>
    )
}

export default Navbar