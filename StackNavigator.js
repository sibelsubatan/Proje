import React, { useEffect, useMemo, useRef, useState } from "react";
import { Login } from "./src/pages/Login";
import { Home } from "./src/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "./src/pages/Profile";
import { AppColor, Secondary, White } from "./src/helpers/colors";
import { wh, ww } from "./src/helpers";
import { Animated, Platform, Text, TouchableOpacity, View } from "react-native";
import { HomeIcon, ProfileIcon, } from "./src/assets/Icons";
import Loader from "./src/components/Loader";
import { MarketDetail } from "./src/pages/MarketDetail";
import { Register } from "./src/pages/Register";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Login'} component={Login} />
            </Stack.Navigator>
        );
    };
    const TabStack = ({ navigation }) => {
        return (
            <>
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: White,
                            shadowColor: "#000",
                            shadowOpacity: .06,
                            shadowOffset: {
                                width: 10,
                                height: 10
                            },
                        },
                    }}
                    initialRouteName={'Home'}>
                    <Stack.Screen
                        name={'Home'}
                        component={Home}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center' }}>
                                    <HomeIcon
                                        color={!focused ? '#555' : AppColor}
                                        size={ww(0.06)}
                                    />
                                </View>
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={'Profile'}
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center' }}>
                                    <ProfileIcon
                                        color={!focused ? '#555' : AppColor}
                                        size={ww(0.06)}
                                    />
                                </View>
                            ),
                        }}
                    />
                </Tab.Navigator>


            </>
        )

    }
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'AuthStack'} component={AuthStack} />
                    <Stack.Screen name={"TabStack"} component={TabStack} />
                    <Stack.Screen name={"Login"} component={Login} />
                    <Stack.Screen name={"Profile"} component={Profile} />
                    <Stack.Screen name={"MarketDetail"} component={MarketDetail} />
                    <Stack.Screen name={"Register"} component={Register} />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );


};

export default StackNavigator;




