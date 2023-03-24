//react and react router
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//context component
import { CartContext } from '../../contexts/card.context';

//components
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

//styles
import { CardDropdownContainer, CartItems } from './card-dropdown.styles';



//function or component
const CardDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => navigate('/checkout');


    return(
        <CardDropdownContainer>
            <CartItems>
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </CartItems>
            <Button style={{marginTop: 'auto',fontSize: '12px' }} buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
        </CardDropdownContainer>  
    );
}

export default CardDropdown;