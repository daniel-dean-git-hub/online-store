import React from 'react'
import { Sticky, Header, Segment, Breadcrumb, Container } from 'semantic-ui-react'
import './Header.scss'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <Sticky active >
        <Segment inverted textAlign="center" basic attached>
            <Header as='h1'>Online Store</Header>
        </Segment>
        <Segment textAlign="left" attached>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Section as={Link} to={'/'}>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                </Breadcrumb>
            </Container>
        </Segment>
    </Sticky>
  )
}

export default index