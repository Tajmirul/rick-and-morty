import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    return (
        <div className="text-center pt-[58px] pb-8 absolute top-0 left-0 right-0 z-[1]">
            <Link to="/">
                <img src="/images/Logo.png" alt="logo" className="max-h-[28px] xl:max-h-[48px]" />
            </Link>
        </div>
    );
};

export default Navbar;
