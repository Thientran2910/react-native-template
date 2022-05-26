import * as React from 'react';

import {
    StackActions,
    createNavigationContainerRef,
} from '@react-navigation/native';

import {Screens, AppMainParamList} from '@navigation';

export const navigationRef = createNavigationContainerRef<AppMainParamList>();

export function navigate<RouteName extends keyof AppMainParamList>(
    name: RouteName,
    params?: any,
) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export const push = (name: Screens, params?: object | undefined) => {
    if (navigationRef.isReady()) {
        // Perform navigation if the app has mounted
        navigationRef.current?.dispatch(StackActions.push(name, params));
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
};

export const getParams = (route: any) => {
    return route?.params ?? {};
};

export const routeNameRef = React.createRef<any>();
