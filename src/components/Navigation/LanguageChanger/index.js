import React from 'react'

import { NavDropdown, Nav } from 'react-bootstrap';

const LanguageChanger = ({ langs, lang, changeLang }) => (
    <Nav>
        <NavDropdown title={lang} className='mx-auto'>
            {langs.map(element => <NavDropdown.Item key={element.id} onClick={() => changeLang(element.id)}>{element.lang}</NavDropdown.Item>)}
        </NavDropdown>
    </Nav>
)

export default LanguageChanger
