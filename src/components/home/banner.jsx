import Carousel from 'react-material-ui-carousel';
import {bannerData} from '../../constants/Data';

const classes={
    image:{
        width:'100%',
        height:280
    }
}
const Banner=()=>{
    return(
        <>
        <Carousel
        autoplay={true}
        indicators={false}
        animation='slide'
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
            background:'#ffffff',
            color:'#494949',
            borderRadius:0,
            }
        }}

        >
            {
                bannerData.map(image=>{
                    return(
                        <img style={classes.image} src={image}></img>
                    )
                }
                 )
            }
        </Carousel>
        </>
    )
}

export default Banner;