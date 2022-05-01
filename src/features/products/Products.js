import React from 'react'

const Products = ({details}) => {
    const {
        category, 
        description,
        //id,
        image,
        price,
        //rating,
        title
    } = details;

  return (
    <div>
        <h1>{title}</h1>

        <p>{description}</p>
        <p><b>{'£'+price}</b></p>

        <button >Add to cart</button>

        <p>{category}</p>

        <div className={'product-list-image-container'}>
            <img src={image} alt={title+' image'} className={'product-list-image'}/>
        </div>
    </div>
  )
}

export default Products