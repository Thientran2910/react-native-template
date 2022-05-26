import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Screens, AppTabParamList} from '@navigation';
import Icon from '@components/elements/Icon';

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={Screens.Home}
                component={require('@screens/home').default}
                options={{
                    tabBarIcon: ({color}: {color: string}) => {
                        return (
                            <Icon
                                type={'Ionicons'}
                                name={'home'}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={Screens.Profile}
                component={require('@screens/profile').default}
                options={{
                    tabBarIcon: ({color}: {color: string}) => {
                        return (
                            <Icon
                                type={'Ionicons'}
                                name={'person-circle'}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default AppTab;
