import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.jpeg';

const Header = (props) => {
    return (
        // better to use data test atributes then className for testing
        <header className='headerComponent' data-test='headerComponent'>
            <div className='wrap'>
                <div className='logo'>
                    <img className='logoIMG' data-test='logoIMG' src={Logo} alt='Logo' />
                </div>
            </div>
        </header>
    )
};

export default Header;