import React, {useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
    // useFlipper,
    useReduxDevToolsExtension,
} from '@react-navigation/devtools';

import * as RootNavigation from '@navigation/RootNavigation';
// import {Logger} from '@utils/logger';
import AppNavigator from '@navigation/AppNavigator';

const AppNavigationContainer = () => {
    // useFlipper(RootNavigation.navigationRef);

    const routeNameRef = useRef<any>();

    if (__DEV__) {
        // useFlipper(RootNavigation.navigationRef);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useReduxDevToolsExtension(RootNavigation.navigationRef);
    }

    const onRouteChange = () => {
        const currentRoute =
            RootNavigation.navigationRef?.current?.getCurrentRoute();

        if (!currentRoute) {
            return;
        }

        const previousRouteName = routeNameRef.current;
        const currentRouteName = currentRoute.name;

        if (previousRouteName !== currentRouteName) {
            // onScreenAppear(currentRouteName, currentRouteName);
            // Logger.printLog(
            //     `[NAV] 🚘🚘🚘 ${previousRouteName} => ${currentRouteName}`,
            // );
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
    };

    return (
        <NavigationContainer
            ref={RootNavigation.navigationRef}
            onReady={() => {
                routeNameRef.current =
                    RootNavigation.navigationRef?.current?.getCurrentRoute()?.name;
            }}
            onStateChange={onRouteChange}
        >
            <AppNavigator />
        </NavigationContainer>
    );
};
export default AppNavigationContainer;
