import { CardMedia } from "@mui/material";

const CardImage = ({ heigth, src, alt, width }: { heigth: number, src: string; alt: string; width: string; }) => {


    return <>
        <CardMedia
            sx={{ objectFit: 'contain', width }}
            component="img"
            height={heigth}
            image={src}
            alt={alt}
        />
    </>
}

export default CardImage;
