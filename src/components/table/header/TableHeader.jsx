import React from 'react'
import ArrowUpIcon from "../../../icons/ArrowUpIcon"
import ArrowDownIcon from "../../../icons/ArrowDownIcon"

import style from './TableHeader.module.css'

const TableHeader = ({columns, sortColumn, sortDirection, onSort}) => {
    return (
        <thead className={style.header}>
        <tr>
            {columns.map(column => (
                <th
                    key={column.key}
                    className={`${column.headerStyle}`}
                    onClick={() => onSort(column.key)}
                >
                    {column.title} {sortColumn === column.key && (sortDirection === 'asc' ? <ArrowUpIcon /> : <ArrowDownIcon />)}
                    {sortColumn !== column.key && (column.defaultSort === 'asc' ? <ArrowUpIcon /> : <ArrowDownIcon />)}
                </th>
            ))}
        </tr>
        </thead>
    )
}

export default TableHeader
