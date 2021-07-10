import React from 'react';

import { Nav } from 'react-bootstrap';

const NavItem = ({ uriRef = '#', displayName = 'Link' }) => (
    <Nav.Link href={uriRef} className='mx-auto'>{displayName}</Nav.Link>
);

export default NavItem;
