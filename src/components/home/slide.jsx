import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {Box, Typography} from '@mui/material';
import Countdown from 'react-countdown';
import {Button} from '@mui/material';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const classes={
    image:{
        height:150
    },
    component:{
        marginTop:12,
        background:'#ffffff',
    },
    deal:{
        padding:"15px 20px",
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    viewbtn:{
        marginLeft:'auto',
        background:'#2874f0',
        borderRadius:2,
        fontSize:13
    },
    text:{
        fontSize:14
    },
    wrapper:{
        padding:'35px 15px'
    }
}

const renderer=({hours,minutes,seconds})=>{
    return(
        <span style={{color:'#7f7f7f',marginRight:5}}>{hours}:{minutes}:{seconds}</span>
    )
};

const Slide=({timer,title,products})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return(
        <>
        <Box style={classes.component}>
        <Box style={classes.deal}>
        <Typography style={{fontSize:22,fontWeight:600,marginRight:5}}>{title}</Typography>
        {timer==false ? <></> :<><img src={timerURL} style={{width:24}}></img>
        <Countdown 
        date={Date.now() + 14*60*60*1000}
        renderer={renderer}
         /></>}
        <Button variant="contained" style={classes.viewbtn}>View All</Button>
        </Box>
        <hr></hr>

        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        keyBoardControl={true}
        autoPlaySpeed={10000}
        >
        {products && products.map(product=>{
            return(
                <Box style={classes.wrapper} textAlign={'center'}>
                <img style={classes.image} src={product.url}></img>
                <Typography style={{...classes.text,fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Typography>
                <Typography style={{...classes.text,color:'green'}}>{product.discount}</Typography>
                <Typography style={{...classes.text,color:'#212121',opacity:.6}}>{product.tagline}</Typography>
                </Box>
            )
        })}
        </Carousel>
        </Box>
        </>
    )
}

export default Slide;