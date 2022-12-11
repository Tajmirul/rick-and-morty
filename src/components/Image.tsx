import { FC, ImgHTMLAttributes, useState } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    height?: number;
    width?: number;
    alt?: string;
    aspectRatio?: number;
}

const Image: FC<Props> = ({ src, alt, height, width, className, aspectRatio, ...rest }) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <div>
            {!loaded && <div className={`w-full bg-gray-50 animate-pulse`} />}
            <img
                src={src}
                alt=""
                onLoad={() => setLoaded(true)}
                className={`${loaded ? '' : 'hidden'}`}
                {...rest}
            />
        </div>
    );
};

export default Image;
