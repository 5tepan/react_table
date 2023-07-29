import { useState } from 'react'

const useFilterData = (initialData) => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const filterData = (data) => {
        return data.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.body.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPosts = filterData(initialData)

    return { searchText, handleSearch, filteredPosts }
}

export default useFilterData
