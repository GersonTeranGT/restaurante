import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegistroScreen from "../screens/RegistroScreen";
import LoginScreen from "../screens/LoginScreen";
import PedidoScreen from "../screens/PedidoScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="registro" component={RegistroScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="botom" component={MyBottom}/>
        </Stack.Navigator>
    )
}

function MyBottom(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="pedido" component={PedidoScreen}/>
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
