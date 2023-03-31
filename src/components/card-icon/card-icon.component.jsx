//react
import { useContext } from "react";

//context component
import { CartContext } from "../../contexts/card.context";

//style
import { CartIconContainer, ItemCount, ShoppingIcon } from './card-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext( CartContext );


    const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer onClick={toggleIsCardOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
        
    );
}

export default CartIcon;