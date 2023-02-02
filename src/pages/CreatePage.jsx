import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

const CreatePage = () => {
    const { productsData, setProductsData } = useContext(DataContext);


    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState(1);
    const [nameErrorMsg, setNameErrorMsg] = useState("");
    const [quantityErrorMsg, setQuantityErrorMsg] = useState("");

    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        setNameErrorMsg("");
        setQuantityErrorMsg("");

        if(isFieldsValid()){
            const product = {
                title: productName,
                quantity: Number(productQuantity)
            }
            setProductsData([...productsData, product])
            navigate('/');
        }
    }

    const isFieldsValid = () => {
        let isValid = true;
        if(productName.length === 0){
            setNameErrorMsg("Please enter a valid product name.")
            isValid = false;
        }

        if(!(/^[1-9][0-9]*$/.test(productQuantity))){
            setQuantityErrorMsg("Please enter a valid Quantity");
            isValid = false;
        }

        if(productsData.some((product) => product.title === productName)){
            setNameErrorMsg("This product already existed. Please create another product")
            isValid = false;
        }

        return isValid;
    }

    return (
        <Stack display="flex" flexDirection="column" alignItems="center" spacing={3}>
            <Typography variant="h4">Create a new product</Typography>
            <Box onSubmit={handleFormSubmit} component="form" sx={{width: '50%', padding: '30px', boxShadow: '0px 0px 5px #333'}}>
                <Stack spacing={2}>
                    <TextField error={Boolean(nameErrorMsg)} helperText={nameErrorMsg} onChange={(e) => setProductName(e.target.value)} id="outlined-basic" label="Product Name" variant="outlined" value={productName}/>
                    <TextField error={Boolean(quantityErrorMsg)} helperText={quantityErrorMsg} onChange={(e) => setProductQuantity(e.target.value)} type="number" id="outlined-basic" label="Product Quantity" variant="outlined" value={productQuantity}/>
                    <Button variant="contained" type="submit">Add Product</Button>
                </Stack>
            </Box>
        </Stack>
    )
}

export default CreatePage;