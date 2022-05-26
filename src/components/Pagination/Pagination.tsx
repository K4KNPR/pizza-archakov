import React, {FC} from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss'


export interface IPagination {
    currentPage: number,
    setCurrentPage: Function
}
export const Pagination: FC<IPagination> = ({currentPage,setCurrentPage }) => {
    return (
        <div >
            <ReactPaginate className={style.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(numberPage) => setCurrentPage(numberPage.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={3}
                previousLabel="<"

            />
        </div>

    );
};
