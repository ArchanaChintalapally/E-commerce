import React from 'react';
import Product from './Product';
import NavComponent from './NavComponent';
import Footer from './Footer';

const products = [
    {
        id: 1,
        name: 'Fundamentals of Mathematics',
        image: 'https://m.media-amazon.com/images/I/71qlwPygUCL._AC_UF1000,1000_QL80_.jpg',
        description: 'ICSE Book for class-X',
        price: 10.99,
    },
    {
        id: 2,
        name: 'Nature of Science',
        image: 'https://www.allbooks.ie/custom/public/images/the-nature-of-science-pack.jpg',
        description: 'Science book for class-XI',
        price: 15.99,
    },
    {
        id: 3,
        name: 'Social Studies',
        image: 'https://www.vivadigital.in/vupload/books/book_280319172005_74.jpg',
        description: 'Social Book for class-3',
        price: 908,
    },
    {
        id: 4,
        name: 'General Knowledge',
        image: 'https://1.bp.blogspot.com/--FuGfHnV8CE/YDPeceUBcGI/AAAAAAAATtM/3U1fMD_MSE4_MEGCJE6_yV9bxH6Uq-dwQCLcBGAsYHQ/s1015/20210222_220930.jpg',
        description: 'Gk Book by Arihant',
        price: 1000,
    },
];

const Home = () => {
    return (
        <div className="home-page">
            <center>
            <NavComponent />
            <h1>Welcome to our store!</h1>
            </center>
            <div className="product-list" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
                {products.map(product => (
                    <Product
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
