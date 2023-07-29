import React, { useMemo } from 'react'
import { getPagesArray } from "../../utils/Pages"
import Button from "../ui/button/Button"

import style from "./Pagination.module.css"

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages])

    const handlePrevPage = () => {
        if (page > 1) {
            changePage(page - 1)
        }
    }

    const handleNextPage = () => {
        if (page < totalPages) {
            changePage(page + 1)
        }
    }

    return (
        <div className={style.pagination}>
            <Button
                onClick={handlePrevPage}
                disabled={page === 1}
                value={'Назад'}
            />
            <div className={style.pagesGroup}>
                {pagesArray.map(p => (
                    <span
                        key={p}
                        className={page === p ? `${style.page} ${style.currentPage}` : style.page}
                    >
                        {p}
                    </span>
                ))}
            </div>
            <Button
                onClick={handleNextPage}
                disabled={page === totalPages}
                value={'Далее'}
            />
        </div>
    )
}

export default Pagination
