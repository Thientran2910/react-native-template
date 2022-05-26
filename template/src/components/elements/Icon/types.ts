import React from 'react';
import {ColorValue, PressableProps, StyleProp, ViewStyle} from 'react-native';

export type IconType =
    | 'System'
    | 'Ionicons'
    | 'AntDesign'
    | 'Feather'
    | 'FontAwesome'
    | 'Entypo'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'EvilIcons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'SimpleLineIcons'
    | 'Octicons';

export interface IconProps extends PressableProps {
    type?: IconType;
    name: string;
    size?: number;
    containerSize?: number;
    color?: string;
    variant?: string;
    rounded?: boolean;
    backgroundColor?: ColorValue | undefined;
    containerStyle?: StyleProp<ViewStyle> | undefined;
    iconStyle?: StyleProp<ViewStyle> | undefined;
    Component?: typeof React.Component;
}
