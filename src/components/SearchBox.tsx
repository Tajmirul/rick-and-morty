import { FC, FormEvent, useState } from 'react';
import ReactSelect from 'react-select';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBox: FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
        value: searchParams.get('q') ?? '',
    });

    const options = [
        { value: 'characters', label: 'Characters' },
        { value: 'Locations', label: 'Locations' },
        { value: 'episode', label: 'Episode' },
    ];

    const changeHandler = (e: FormEvent<HTMLInputElement>): void => {
        setState({ ...state, value: e.currentTarget.value });
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate(`/casts?q=${state.value}`);
    };

    return (
        <div className="bg-gradient-to-br from-primary to-secondary p-[1px] rounded-full">
            <form
                className="flex w-full max-w-[280px] xl:max-w-[424px] rounded-full"
                onSubmit={submitHandler}>
                <div className="w-[162px]">
                    <ReactSelect
                        options={options}
                        defaultValue={options[0]}
                        classNames={{
                            control: (state) => {
                                let className = '';
                                className += state.isFocused ? ' !outline-none' : '';
                                return `w-[120px] xl:w-[162px] h-5 xl:h-[58px] !border-none px-1 lg:px-3 !bg-primary !text-white font-semibold text-xs lg:text-lg !rounded-l-full !outline-none ${className}`;
                            },
                            singleValue: () => '!text-white',
                            indicatorSeparator: () => 'hidden',
                            input: () => '!text-white',
                            dropdownIndicator: () => ' !p-0 !text-white text-xs lg:text-lg',
                            menuList: () => 'px-2',
                            option: (state) => {
                                let className = '';

                                className += state.isSelected ? ' !bg-transparent' : '';
                                className += state.isFocused ? ' !bg-transparent' : '';

                                return `text-sm lg:text-lg font-semibold border-b border-gray-50/[50%] ${className}`;
                            },
                            menu: () => '!bg-primary !text-white',
                        }}
                    />
                </div>
                <div className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 lg:text-xl left-2 lg:left-4 pointer-events-none">
                        <IoSearchSharp />
                    </span>
                    <input
                        type="search"
                        className="w-full h-full rounded-r-[25px] bg-[#22242D] text-sm xl:text-xl font-semibold border-none outline-none pl-8 lg:pl-12 lg:pr-4"
                        placeholder="Search"
                        name="value"
                        value={state.value}
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit" className="hidden"></button>
            </form>
        </div>
    );
};

export default SearchBox;
