import React, { createContext, useState } from 'react';

export const DataContext= createContext(null);

export const DataContextProvider = ({children}) => {

const [productsData, setProductsData] = useState([]);
    
    return (
        <DataContext.Provider value={{productsData, setProductsData}}>
            {children}
        </DataContext.Provider>
    )
}