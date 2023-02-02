import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { productsData } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {
                productsData.map((product) => (
                    <Grid sx={{cursor: 'pointer'}} onClick={() => navigate(`/detail/${product.slug}`)} item xs={12} sm={6} md={3}>
                        <ProductCard title={product.title} imgHref={product.imgHref} quantity={product.quantity}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default HomePage;