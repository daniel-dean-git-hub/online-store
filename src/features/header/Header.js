import React, { useEffect, useState } from 'react'
import { Sticky, Header, Segment, Breadcrumb, Container } from 'semantic-ui-react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation()
    const [links, setLinks] = useState([])

    useEffect(() => {
        const pathItems = pathname.split('/').slice(1)
        setLinks(pathItems)
    }, [pathname])

    const breadcrumbs = links.map((link,index) => {
        if (index === links.length-1) return <span key={index}><Breadcrumb.Section key={index}>{decodeURIComponent(link)}</Breadcrumb.Section></span>
        
        const url = links.slice(0,index+1).join('/')

        return (
            <span key={index}>
                <Breadcrumb.Section as={Link} to={url}>{decodeURIComponent(link)}</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </span>
        )
    })

    console.log(links)

  return (
    <Sticky active >
        <Segment inverted textAlign="center" basic attached>
            <Header as='h1'>Online Store</Header>
        </Segment>
        { links[0] !== '' && <Segment textAlign="left" attached>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Section as={Link} to={'/'}>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    {breadcrumbs}
                </Breadcrumb>
            </Container>
        </Segment> }
    </Sticky>
  )
}

export default Navbar