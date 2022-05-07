import React, { useEffect, useState } from 'react'
import { Sticky, Header, Segment, Breadcrumb, Container, Item, Grid } from 'semantic-ui-react'
import './Header.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { selectAllCategories, selectAllProductsFromSearch } from '../products/productsSlice'
import { useSelector } from 'react-redux'
import Searchbar from './searchbar/Searchbar'
import DropdownMenu from './dropdownMenu/DropdownMenu'

const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [links, setLinks] = useState([])
    const [search, setSearch] = useState('')
    const [width, setWidth] = useState(window.innerWidth)
    
    const allCategories = useSelector(selectAllCategories)
    const searchResults = useSelector((state) => selectAllProductsFromSearch(state, search)) 


    useEffect(() => {
        const pathItems = pathname.split('/').slice(1)
        setLinks(pathItems)
    }, [pathname])

    const breadcrumbs = links.map((link,index) => {
        if (index === links.length-1) return <span key={index}><Breadcrumb.Section className="breadcrumb-text">{decodeURIComponent(link)}</Breadcrumb.Section></span>
        
        const url = links.slice(0,index+1).join('/')

        return (
            <span key={index}>
                <Breadcrumb.Section as={Link} to={url} className="breadcrumb-text">{decodeURIComponent(link)}</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </span>
        )
    })

    const resultRenderer = (product) => {
        if (!product) return

        const {title, price, image} = product

        return (
            <Item>
                <Item.Image size='tiny' src={image} />
                <Item.Content verticalAlign='middle'>
                    <Item.Header>{title}</Item.Header>
                    <Item.Meta>${price}</Item.Meta>
                </Item.Content>
            </Item>
        ) 
    }


    const onResultSelect = (event, data) => {
        if (data) {
            const { result } = data
            navigate(`products/${result.category}/${result.id}`)
        }
        setSearch('')
    }

    useEffect(() => {
        const resize = () => { setWidth(window.innerWidth) }
        window.addEventListener('resize', resize )
        return () => window.removeEventListener('resize', resize)
    })

    return (
        <Sticky active >
            <Segment inverted textAlign="center" basic attached>
                <Grid padded columns={3} divided stackable>
                    <Grid.Column>
                        <Header as={Link} to={'/'} inverted size='huge'>Online Store</Header>
                    </Grid.Column>
                   
                    <Grid.Column>
                        <Searchbar 
                            search={search} 
                            searchResults={searchResults} 
                            resultRenderer={resultRenderer} 
                            setSearch={setSearch} 
                            onResultSelect={onResultSelect}
                        />
                    </Grid.Column>
                    <Grid.Column only='large screen'>
                        <DropdownMenu categories={allCategories} />
                    </Grid.Column>
                </Grid>
            </Segment>
            { links[0] !== '' && width >= 1200 && <Segment textAlign="left" attached>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Section as={Link} to={'/'}>Home</Breadcrumb.Section>
                        <Breadcrumb.Divider/>
                        {breadcrumbs}
                    </Breadcrumb>
                </Container>
            </Segment> }
        </Sticky>
    )
}

export default Navbar