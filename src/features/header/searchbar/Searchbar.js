import React from 'react'
import { Search, Grid } from 'semantic-ui-react'

const Searchbar = (props) => {
    const { search, searchResults, resultRenderer, setSearch, onResultSelect } = props
    
    return (
        <Grid centered>
            <Search
                aligned={'center'}
                placeholder='Search...'
                onSearchChange={(e) => setSearch(e.target.value)}
                resultRenderer={resultRenderer}
                results={searchResults}
                onResultSelect={onResultSelect}
                value={search}                
            >
                <Search.Result className="search-results"></Search.Result>
            </Search>
        </Grid>
    )
}

export default Searchbar