//react
import { useContext } from "react";

//icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//context component
import { CartContext } from "../../contexts/card.context";

//style
import { CartIconContainer, ItemCount } from './card-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext( CartContext );


    const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer onClick={toggleIsCardOpen}>
            <ShoppingIcon className='shopping-icon' style={{width: '24px', height: '24px'}} />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
        
    );
}

export default CartIcon;