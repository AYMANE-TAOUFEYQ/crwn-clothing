import { createContext, useState, useEffect } from "react";

/* import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js"; 

import SHOP_DATA from '../shop-data.js'; */

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    /*useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []); */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCollectionAndDocuments();
            setCategoriesMap(categoriesMap)
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}