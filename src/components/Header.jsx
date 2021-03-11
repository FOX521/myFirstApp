import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        let logoStyle = {
            width: '100px',
            height: '60px'
        }

        return (
            <header className='header'>
                <img style={logoStyle} src='https://www.logowiks.com/dist/images/logo.png.pagespeed.ce.BJocOuRLqc.png'></img>
                <div className={'login_block'} style={{display: 'block', float: 'right'}}>
                   {this.props.isAuth ? this.props.login : <NavLink to={'/login'}>Login</NavLink> } 
                </div>
            </header>
        )
    }
}

export default Header;