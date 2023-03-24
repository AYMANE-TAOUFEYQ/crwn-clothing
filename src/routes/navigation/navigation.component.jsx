import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/card.context';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';


import { signOutUser } from '../../utils/firebase/firebase.utils';

//style
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext( CartContext );


    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo  className='logo'  />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink to='/shop' >
                        Shop
                    </NavLink>

                    {currentUser ? 
                        <NavLink as='span' onClick={signOutUser}>
                            {' '}Sign out{' '}
                        </NavLink>
                        : 
                        <NavLink to='/auth' >
                            Sign In
                        </NavLink>
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CardDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;