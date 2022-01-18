import {Box} from '@mui/material';
import {ImageURL} from '../../constants/Data';

const classes={
    wrapper:{
        display:'flex',
        justifyContent:'space-between',
        marginTop:'10px'
    }
}
const MiddleSection=()=>{

    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Box style={classes.wrapper}>
            {
                ImageURL.map(image=>{
                return(
                    <img style={{width:'33%'}} src={image}></img>
                )
            })
            }
        </Box>
        <img  style={{width:'100%',marginTop:10}} src={coronaURL}></img>
        </>
    )
}

export default MiddleSection;