import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screns/Home";
import Dino from "../screns/Dino";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Dino" component={Dino}/>
        </Stack.Navigator>
    );
};

export default StackRoutes;