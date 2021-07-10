import React from 'react'

import { Nav } from 'react-bootstrap';

import NavItem from './NavItem';

const NavItems = ({ nav }) => (
    <Nav className="mx-auto">
        {nav.map(item => (
            <NavItem key={item.id} uriRef={item.uriRef} displayName={item.displayName} />
        ))}
    </Nav>
)

export default NavItems
