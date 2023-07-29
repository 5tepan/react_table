import React, {useEffect, useState} from "react"
import Search from "./components/search/Search"
import Table from "./components/table/Table"
import useFilterData from "./hooks/useFilterData"
import PostService from "./api/PostService"
import Loader from "./components/ui/loader/Loader"
import {useFetching} from "./hooks/useFetching"
import {getPageCount} from "./utils/Pages"
import Pagination from "./components/pagination/Pagination"

import style from './App.module.css'

function App() {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const { searchText, handleSearch, filteredPosts } = useFilterData(posts)

    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className={style.app}>
            <Search
                value={searchText}
                onChange={handleSearch}
            />
            {error &&
                <div>Произошла ошибка ${error}</div>
            }
            {isLoading
                ? <div className={style.loader}><Loader/></div>
                : <div>
                    <Table
                        posts={filteredPosts}
                    />
                    <Pagination
                        page={page}
                        changePage={changePage}
                        totalPages={totalPages}
                    />
                </div>
            }
        </div>
    )
}

export default App
