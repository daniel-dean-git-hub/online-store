import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseItemQuantity, selectBasketItem } from '../basket/basketSlice'
import { selectProduct } from '../products/productsSlice';
import { Button, Icon } from 'semantic-ui-react'

const AddToCartButton = ({id, fluid = false}) => {
    const dispatch = useDispatch();
    const [cartBtnMessage, setCartBtnMessage] = useState('Add Item')
    const details = useSelector(state => selectProduct(state, parseInt(id)))
    const { price} = details
    const basketItem = useSelector(state => selectBasketItem(state, id))
    
    const addOrUpatedBasketItem = () => {
        basketItem
            ? dispatch(increaseItemQuantity({id: id}))
            : dispatch(addItem({id: id, quantity: 1, price: price}))

        fluid 
            ? setCartBtnMessage('Added to Basket ✔')
            : setCartBtnMessage('Added ✔')

        setTimeout(() => { 
            setCartBtnMessage('Add Item')
        }, 1500)
    }
    
    if (basketItem?.quantity >= 100) {
        return (
            <Button fluid={fluid} disabled>
                <Button.Content>{fluid ? 'Max stock limit reached' : 'Limit reached'}</Button.Content>
            </Button>  
        )
    }

    return (
        <Button fluid={fluid} onClick={addOrUpatedBasketItem}>
            <Button.Content>
                <Icon name='shopping basket' />{cartBtnMessage}
            </Button.Content>
        </Button>  
    )
}

export default AddToCartButton