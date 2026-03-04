import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegistroScreen from "../screens/RegistroScreen";
import LoginScreen from "../screens/LoginScreen";
import PedidoScreen from "../screens/PedidoScreen";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ListaScreen from "../screens/ListaScreen";
import FacturaScreen from "../screens/FacturaScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack (){
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#233D4D",
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Registro" component={RegistroScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Botom" component={MyBottom} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

function MyBottom(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#233D4D',
                    borderTopColor: 'transparent',
                },
                headerStyle: {
                    backgroundColor: '#233D4D',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
            }}
        >
        <Tab.Screen name="Pedido" component={PedidoScreen} options={{ tabBarIcon: () => <FontAwesome5 name="clipboard-list" size={24} color="white" /> }}/>
        <Tab.Screen name="Lista" component={ListaScreen} options={{ tabBarIcon: () => <FontAwesome5 name="list" size={24} color="white" /> }}/>
        <Tab.Screen name="Factura" component={FacturaScreen} options={{ tabBarIcon: () => <Entypo name="check" size={24} color="white" /> }}/>
        </Tab.Navigator>
    )
}

export default function MainNav(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
