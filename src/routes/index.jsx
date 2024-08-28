import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import StackRoutes from "./stack.routes";

const Routes = () => {
    return(
        <NavigationContainer>
            <StatusBar sttyle="auto"/>
            <StackRoutes/>
        </NavigationContainer>
    );
};

export default Routes;