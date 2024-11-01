import React, {useState,useEffect} from 'react'
import { View,Text,FlatList } from 'react-native'
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';


const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const { data: productData } = await axios.get("https://fakestoreapi.com/products");
            setData(productData);
        } catch (error) {
            console.error("Data fetch error: ", error);
        }
    }


    const renderProduct = ({item}) => <ProductCard product={item} />

    return (
        <View>
            <FlatList
            data={data}
            renderItem={renderProduct}
            />
        </View>
    )
}

export default Products;