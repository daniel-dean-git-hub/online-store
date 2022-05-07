import React from 'react'
import { Search } from 'semantic-ui-react'
import './Searchbar.scss'

const Searchbar = (props) => {
    const { search, searchResults, resultRenderer, setSearch, onResultSelect } = props
    const items = []
    
    searchResults.forEach(e => {
        items.push({
            id: e.productId,
            title: e.title,
            image: e.image,
            category: e.category,
            price: e.price.toString()
        })
    })

    return (
        <>
            {
                !searchResults ? <Search loading></Search> 
                : <Search 
                    aligned={'center'}
                    placeholder='Search...'
                    onSearchChange={(e) => setSearch(e.target.value)}
                    resultRenderer={resultRenderer}
                    results={items}
                    onResultSelect={onResultSelect}
                    value={search}  
                    fluid             
                >
                    {/* <Search.Result className="search-results"></Search.Result> */}
                </Search>
            }
        </>
    )
}

export default Searchbar