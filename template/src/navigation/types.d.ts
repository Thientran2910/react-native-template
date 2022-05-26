import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, ParamListBase} from '@react-navigation/native';

import {Screens} from '@navigation';

// App Navigator
export type AppNavigatorParamList = {
    Onboarding: undefined;
    RegistrationStack: undefined;
    AppMain: undefined;
    Maintenance: undefined;
};

export type AppTabParamList = {
    Home: undefined;
    Profile: undefined;
};

// App Main
export type AppMainParamList = {
    [Screens.AppTab]: undefined;
};

type ScreenPropsCommon<
    TScreen extends keyof ScreenProps = any,
    ScreenProps extends ParamListBase = AppMainParamList,
> = {
    navigation: StackNavigationProp<ScreenProps, TScreen>;
};

type ScreenPropsWithRoute<
    TScreen extends keyof ScreenProps = any,
    ScreenProps extends ParamListBase = AppMainParamList,
> = {
    route: RouteProp<ScreenProps, TScreen>;
} & ScreenPropsCommon<TScreen, ScreenProps>;

export enum ScreenPropsType {
    Default,
    WithRoute,
    Any,
}

export type TMainScreenProps<
    TScreen extends keyof ScreenProps = any,
    TScreenPropsType extends ScreenPropsType = ScreenPropsType.Default,
    ScreenProps extends ParamListBase = AppMainParamList,
> = TScreenPropsType extends ScreenPropsType.Default
    ? ScreenPropsCommon<TScreen, ScreenProps>
    : TScreenPropsType extends ScreenPropsType.Any
    ? ScreenPropsWithRoute<any, any>
    : ScreenPropsWithRoute<TScreen, ScreenProps>;
