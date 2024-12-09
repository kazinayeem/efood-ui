import React from 'react';
import OrderScreen from '../../screens/order/OrderScreen';
import MapScreen from '../../screens/map/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const OrderStack = createNativeStackNavigator();

const OrderNavigator = () => (
    <OrderStack.Navigator screenOptions={{ headerShown: false }}>
        <OrderStack.Screen name="Order" component={OrderScreen} />
        <OrderStack.Screen name="DeliveryMap" component={MapScreen} />
    </OrderStack.Navigator>
);

export default OrderNavigator;
