import { FC, FormEvent, useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from 'types/response';

interface Props {
    info: Pagination;
}

const Paginate: FC<Props> = ({ info }) => {
    const [page, setPage] = useState((info.prev || 0) + 1);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const goToPage = (page: number): void => {
        if (page < 1) {
            page = 1;
        } else if (page > info.pages) {
            page = info.pages;
        }
        setPage(page);
        // navigate(`${pathname}?page=${page}`);
        searchParams.set('page', page.toString());
        navigate({
            search: searchParams.toString(),
        });
    };

    const goToNext = (): void => goToPage(info.next);

    const goToPrev = (): void => goToPage(info.prev);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        goToPage(page);
    };

    return (
        <div className="mb-10 flex items-center justify-center gap-5">
            <span>Page</span>
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <button
                    className=" text-white text-xl py-2"
                    disabled={info.prev === null}
                    onClick={() => goToPrev()}
                    type="button">
                    <BsArrowLeftCircle />
                </button>
                <input
                    type="number"
                    className="border border-primary text-white bg-transparent px-3 py-3 rounded-full w-[87px] text-center"
                    value={page}
                    onBlur={() => goToPage(page)}
                    onChange={(e) => setPage(Number(e.target.value))}
                />
                <button
                    className="text-white text-xl py-2"
                    disabled={info.next === null}
                    onClick={() => goToNext()}
                    type="button">
                    <BsArrowRightCircle />
                </button>
            </form>
            <span>of {info.pages}</span>
        </div>
    );
};

export default Paginate;
