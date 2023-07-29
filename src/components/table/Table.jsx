import React, { useState } from 'react'
import TableHeader from "./header/TableHeader"
import TableRow from "./body/TableRow"

import style from './Table.module.css'

const Table = (props) => {
    const [sortColumn, setSortColumn] = useState('id')
    const [sortDirection, setSortDirection] = useState('asc')

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortColumn(column)
            setSortDirection('asc')
        }
    }

    const sortData = (data) => {
        if (sortColumn === null) {
            return data
        }

        return data.slice().sort((a, b) => {
            const aValue = a[sortColumn]
            const bValue = b[sortColumn]

            if (aValue === bValue) {
                return 0
            }

            if (sortDirection === 'asc') {
                return aValue < bValue ? -1 : 1
            } else {
                return aValue > bValue ? -1 : 1
            }
        })
    }

    const sortedPosts = sortData(props.posts)

    const columns = [
        { key: 'id', title: 'ID', headerStyle: style.headerId, defaultSort: 'asc' },
        { key: 'title', title: 'Заголовок', headerStyle: style.headerTitle, defaultSort: 'desc' },
        { key: 'body', title: 'Описание', headerStyle: style.headerBody, defaultSort: 'desc' },
    ]

    if (props.posts.length === 0) {
        return <div>Нет данных</div>
    }

    return (
        <table className={style.table}>
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onSort={handleSort}
            />
            <tbody>
            {sortedPosts.map(post => (
                <TableRow
                    key={post.id}
                    post={post}
                />
            ))}
            </tbody>
        </table>
    )
}

export default Table
