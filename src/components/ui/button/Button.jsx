import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={style.button}
        >
            {props.value}
        </button>
    )
}

export default Button