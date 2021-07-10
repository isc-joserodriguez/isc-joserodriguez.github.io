import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';

import NavItems from './NavItems';
import LanguageChanger from './LanguageChanger';

import Logo from '../../assets/images/logo.svg';

const Header = ({ nav, langs, lang, changeLang }) => (
    <Navbar bg='dark' expand='lg' variant='dark' className='py-1' fixed='top'>
        <Container>
            <Navbar.Brand href="#home">
                <Image src={Logo} height='35' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <NavItems nav={nav} />
                <LanguageChanger langs={langs} lang={lang} changeLang={changeLang} />
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header
