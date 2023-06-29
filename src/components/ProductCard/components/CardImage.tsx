//@ts-ignore
import ReactImageMagnify from 'react-image-magnify';
import { CardMedia } from "@mui/material";
import { ReactComponent as Zoom } from '../../../images/clarity_zoom-in-line.svg';
import '../../../index.scss';

const CardImage = ({ height, src, alt, width, withZoom }: { height: number | string, src: string; alt: string; width: string | number; withZoom?: boolean }) => {


    return <>
        {
            !withZoom ?
                <CardMedia
                    sx={{ objectFit: 'contain', width }}
                    component="img"
                    height={height}
                    image={src}
                    alt={alt}
                />
                :
                <div style={{ height, width }}>
                    <ReactImageMagnify  {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src
                        },
                        largeImage: {
                            src,
                            width: 1200,
                            height: 1800,
                        },
                        enlargedImagePosition: 'over',
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                        hintTextMouse: 'text',
                        hintComponent: () => <div className='center'><Zoom /></div>
                    }} />
                </div>


            // <MagnifierContainer style={{ height, width }}>
            //     <div>
            //         <MagnifierPreview imageSrc={src} />
            //     </div>
            //     <MagnifierZoom style={{ height: "100px", width: "100px" }} imageSrc={src} />
            // </MagnifierContainer>
        }
    </>
}

export default CardImage;
