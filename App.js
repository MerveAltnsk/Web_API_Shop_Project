import React from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './src/pages/Products/Products';
import Detail from './src/pages/Detail/Detail';

// Stack yapısı oluşturuluyor. Burada iki sayfa arasında geçiş yapılıyor.
const Stack = createStackNavigator()    // Stack yapısını fonksiyon olarak buraya çağırıyoruz


function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="ProductsPage" component={Products} />
            <Stack.Screen name="DetailsPage" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;
