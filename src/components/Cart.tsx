import React, { FC } from 'react';

interface Props {
    image?: string;
    title: string;
    category?: string;
}

const Cart: FC<Props> = ({ image, title, category }) => {
    return (
        <div className="theme-cart p-[1px] bg-gradient-to-br from-primary to-secondary rounded-[10px]">
            <div
                className={`${
                    image ? 'lg:p-4' : 'lg:px-6 lg:py-5'
                } p-[7px] bg-[#252834] rounded-[10px] theme-cart`}>
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full object-cover rounded-md mb-[7px] aspect-square lg:mb-4"
                    />
                )}
                {category && <p className="uppercase font-normal">{category}</p>}
                <h3 className="text-sm lg:text-base 2xl:text-xl font-medium line-clamp-1">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default Cart;
