import React, { useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import { PRODUCT_DATA } from '../DATA';

const DetailPage = () => {
    const { slug } = useParams();
    const data = useContext(DataContext);

    const getProductData = useCallback(() => {
        const product = PRODUCT_DATA.find((product) => product.slug === slug);
        console.log(product);
    }, [slug]);

    useEffect(() => {
        getProductData();
    }, [getProductData]);

    return (
        <div onClick={() => data.setData('dadwad')}>{`product page with ${slug}`}</div>
    )
}

export default DetailPage;