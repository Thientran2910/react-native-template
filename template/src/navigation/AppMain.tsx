import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {HeaderBackButtonProps} from '@react-navigation/elements';

import {Screens, defaultNavigationOptions, AppMainParamList} from '@navigation';
// import AppTab from '@navigation/AppTab';
import AppTab from '@navigation/AppTab';

// import HeaderLeftButton from '@navigation/components/HeaderLeftButton';
// import Icon from '@components/elements/Icon';

const Stack = createStackNavigator<any>();

function AppMain() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...defaultNavigationOptions,
            }}
        >
            {/* ############################## Card group ############################## */}
            <Stack.Screen
                name={Screens.AppTab}
                component={AppTab}
                options={{
                    headerShown: false,
                }}
            />
            {/* ############################## Card group ############################## */}

            {/* ############################## Modal group ############################## */}
            {/* <Stack.Group
                screenOptions={{
                    presentation: 'modal',
                    headerLeft: (props: HeaderBackButtonProps) => (
                        <HeaderLeftButton
                            {...props}
                            ContentComponent={
                                <Icon type="AntDesign" name="close" size={24} />
                            }
                        />
                    ),
                }}
            /> */}
            {/* ############################## Modal group ############################## */}
        </Stack.Navigator>
    );
}

export default AppMain;
