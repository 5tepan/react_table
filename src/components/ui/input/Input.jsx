import React from 'react'
import style from './Input.module.css'

const Input = (props) => {
    return (
        <input
            className={style.input}
            placeholder={props.placeholder}
            {...props}
        />
    )
}

export default Input