import React from 'react';

class Header extends React.Component {
    render() {
        let logoStyle = {
            width: '100px',
            height: '60px'
        }

        return (
            <header className='header'>
                <img style={logoStyle} src='https://www.logowiks.com/dist/images/logo.png.pagespeed.ce.BJocOuRLqc.png'></img>
            </header>
        )
    }
}

export default Header;