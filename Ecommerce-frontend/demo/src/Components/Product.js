import React from 'react';

const Product = ({ image, name, description, price }) => {
    return (
        <div className="product">
            <img src={image} alt={name} style={{ width: '200px', height: '200px',marginTop:'30px'}}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
};

export default Product;
