import React, { createContext, useState } from 'react';
import { PRODUCT_DATA } from '../DATA';

export const DataContext= createContext(null);

export const DataContextProvider = ({children}) => {

    const [productsData, setProductsData] = useState(PRODUCT_DATA);

    return (
        <DataContext.Provider value={{productsData, setProductsData}}>
            {children}
        </DataContext.Provider>
    )
}