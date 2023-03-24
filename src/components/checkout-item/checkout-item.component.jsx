import { CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Value, Price, RemoveButton } from './checkout-item.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/card.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity }= cartItem;

    const { clearItemFromCard, addItemToCard, removeItemToCard } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCard(cartItem);
    const addItemHandler = () => addItemToCard(cartItem);
    const removeItemHandler = () => removeItemToCard(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img 
                    src={imageUrl}
                    alt={name}
                    style={{width: '100%', height: '100%'}}
                />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>

                <Value>{quantity}</Value>
                
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{`$${price}`}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;