import { Alert, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const { productsData, setProductsData } = useContext(DataContext);

    const handleButtonClick = (type, title) => {
        if(type === '+'){
            setProductsData(productsData.map((product) => {
                if(product.title !== title){
                    return product;
                }

                return ({
                    ...product,
                    quantity: product.quantity + 1
                })
            }))
        } else {
            setProductsData(productsData.map((product) => {
                if(product.title !== title){
                    return product;
                }

                return ({
                    ...product,
                    quantity: Math.max(product.quantity - 1, 0)
                })
            }))
        }
    }

    const handleRemoveButtonClick = (e, title) => {
        e.stopPropagation();
        setProductsData(productsData.filter((product) => product.title !== title));
    }

    if(productsData.length === 0){
        return (
            <Alert severity="info">No products found. Please create a new product.</Alert>
        )
    }

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {
                productsData.map((product) => (
                    <Grid key={product.slug} sx={{cursor: 'pointer'}} item xs={12} sm={6} md={3}>
                        <ProductCard title={product.title} imgHref={product.imgHref} quantity={product.quantity} slug={product.slug} handleButtonClick={handleButtonClick} handleRemoveButtonClick={handleRemoveButtonClick}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default HomePage;