import React from 'react'
import SearchIcon from "../../icons/SearchIcon"
import Input from "../ui/input/Input"

import style from './Search.module.css'

const Search = (props) => {
    return (
        <div className={style.search}>
            <Input
                placeholder={'Поиск'}
                {...props}
            />
            <div className={style.searchIcon}>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Search