import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sticky, Header, Segment, Breadcrumb, Container, Item, Grid, Button, Icon } from 'semantic-ui-react'
import { selectAllCategories, selectAllProductsFromSearch } from '../products/productsSlice'
import { selectAllItemQuantity } from '../basket/basketSlice'
import Searchbar from './searchbar/Searchbar'
import DropdownMenu from './dropdownMenu/DropdownMenu'
import './Header.scss'

const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [links, setLinks] = useState([])
    const [search, setSearch] = useState('')
    const [width, setWidth] = useState(window.innerWidth)
    
    const allCategories = useSelector(selectAllCategories)
    const searchResults = useSelector((state) => selectAllProductsFromSearch(state, search)) 
    const basketItems = useSelector(selectAllItemQuantity)

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
                <Grid padded stackable columns='equal'>
                    <Grid.Column width={4}>
                        <Header as={Link} to={'/'} inverted size='huge'>Boutique En Ligne Chic</Header>
                    </Grid.Column>
                   
                    <Grid.Column >
                        <Searchbar 
                            search={search} 
                            searchResults={searchResults} 
                            resultRenderer={resultRenderer} 
                            setSearch={setSearch} 
                            onResultSelect={onResultSelect}
                        />
                    </Grid.Column>

                    <Grid.Column only='large screen' width={3}>
                        <DropdownMenu categories={allCategories} />
                    </Grid.Column>

                    <Grid.Column width={2}>
                        <Button className="basket-btn"onClick={() => navigate('/Basket')}>
                            <Icon name='cart' /> {basketItems}
                        </Button>
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