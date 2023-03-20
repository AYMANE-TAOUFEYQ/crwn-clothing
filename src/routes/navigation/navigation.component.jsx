import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/card.context';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';


import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext( CartContext );


    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo  className='logo'  />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop' >
                        Shop
                    </Link>

                    {currentUser ? 
                        <span className='nav-link' onClick={signOutUser}>
                            {' '}Sign out{' '}
                        </span>
                        : 
                        <Link className='nav-link' to='/auth' >
                            Sign In
                        </Link>
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;