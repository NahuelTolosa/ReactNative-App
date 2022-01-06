import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";

import { Home } from '../screens/Home';
import { Add } from '../screens/Add';
import { SignIn } from '../screens/SignIn';
import { LogIn } from '../screens/LogIn';
import { User } from '../screens/User';
import { TouchableOpacity } from 'react-native';


export const MainNavigator = () => {

    const Tab = createBottomTabNavigator();

    const [user,setUser] = useState(null);

    console.log(user)

    const handleSignOut = () => {

        const auth = getAuth();

        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    useEffect(() => {

        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            } else {
                setUser(null);                
            }
        });

    }, [])

    return (
        <NavigationContainer>

            <Tab.Navigator

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {

                        if (route.name === 'Home') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'home'
                                            : 'home-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );

                        } else if (route.name === 'Agregar') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'add-circle'
                                            : 'add-circle-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );

                        } else if (route.name === 'Perfil') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'person'
                                            : 'person-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Sign In') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'person-add'
                                            : 'person-add-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Log In') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'log-in'
                                            : 'log-in-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'blue',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        user && <TouchableOpacity onPress={() => handleSignOut()}>
                            <SimpleLineIcons name='logout' size={30} color={'black'}></SimpleLineIcons>
                        </TouchableOpacity>
                    ) 
                })}
            >

                { user
                        ?
                        <>
                            <Tab.Screen name="Home" component={Home} />
                            <Tab.Screen name="Agregar" component={Add} />
                            <Tab.Screen name="Perfil" component={User} />
                        </>

                        :
                        <>
                            <Tab.Screen name="Sign In" component={SignIn} />
                            <Tab.Screen name="Log In" component={LogIn} />
                        </>
                }

            </Tab.Navigator>

        </NavigationContainer>
    )
}
