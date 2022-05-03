import React, { useEffect, useState } from 'react'
import { Sticky, Header, Segment, Breadcrumb, Container, Menu, Dropdown } from 'semantic-ui-react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'

import { selectAllCategories } from '../products/productsSlice'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { pathname } = useLocation()
    const [links, setLinks] = useState([])

    const allCategories = useSelector(selectAllCategories)
    console.log(allCategories)


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

    const dropdownMenu = () => {
        const dropdownItems = allCategories.map((category, index) => <Dropdown.Item key={index} as={Link} to={`Products/${category}`} >{category}</Dropdown.Item>)

        return (
            <Menu compact>
                <Dropdown text='Category' simple item >
                    <Dropdown.Menu>
                        {dropdownItems}
                    </Dropdown.Menu>
                </Dropdown>

            </Menu>
        ) 
    }

    return (
        <Sticky active >
            <Segment inverted textAlign="center" basic attached>
                <Header as='h1'>Online Store</Header>
                {dropdownMenu()}
            </Segment>
            { links[0] !== '' && <Segment textAlign="left" attached>
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