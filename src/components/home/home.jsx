import Navbar from './navbar';
import Banner from './banner';
import MiddleSection from './midsection';
import {Box} from '@mui/material';
import Slide from './slide';
const classes={
    component:{
        padding:10,
        background:'#f2f2f2'
    },
    rightWrapper:{
        padding:5,
        background:'#ffffff',
        margin:'12px 0 0 10px',
        width:'17%'
    }
}
const Home=()=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <>
            <Navbar></Navbar>
            <Box style={classes.component}>
            <Banner></Banner>
            <Box style={{display:'flex'}}>
            <Box style={{width:'83%'}}>
            <Slide timer={true} title="Deal of the Day"></Slide>
            </Box>
            <Box style={classes.rightWrapper}>
                <img  style={{width:230}} src={adURL}></img>
            </Box>
            </Box>
            <MiddleSection></MiddleSection>
            <Slide timer={false} title="Discounts For You"></Slide>
            <Slide timer={false} title="Top Selections"></Slide>
            <Slide timer={false} title="Recommended Items"></Slide>
            <Slide timer={false} title="Best Selecetions"></Slide>
            <Slide timer={false} title="Free me Le Jao"></Slide>
            </Box>
        </>
    )
}


export default Home