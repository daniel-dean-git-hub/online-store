import React from 'react'

import { Dropdown } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const DropdownMenu = ({categories}) => {
    const navigate = useNavigate()
    const dropdownItems = categories.map((category, index) => ({ key: index, value: category, text: category }))    
    const navigateToCategory = (event, data) => navigate(`Products/${data.value}`)

    return (

            <Dropdown 
                placeholder='Categories'
                button
                selection
                options={dropdownItems}   
                onChange={navigateToCategory}         
            />
    )
}

export default DropdownMenu