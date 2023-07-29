import React from 'react'

import style from './TableRow.module.css'

const TableRow = ({post}) => {
    return (
        <tr key={post.id}>
            <td className={style.postId}>{post.id}</td>
            <td className={style.td}>{post.title}</td>
            <td className={style.td}>{post.body}</td>
        </tr>
    )
}

export default TableRow
