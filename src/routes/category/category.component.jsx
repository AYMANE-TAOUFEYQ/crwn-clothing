import { CategoryContainer, CategoryTitle } from './category.styles';

import { useSelector } from 'react-redux';

import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    //console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    

    useEffect(()=>{
        //console.log("effect fired calling setProducts");
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            
            <CategoryContainer>
                {products &&
                    products.map((product)=> <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;