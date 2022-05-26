import React, {useMemo} from 'react';
import {View, StyleProp, ViewStyle, Pressable, StyleSheet} from 'react-native';

import {getIconType} from '@components/elements/Icon/helper';
import {IconProps} from '@components/elements/Icon/types';

const Icon = (props: IconProps) => {
    const {
        type = 'System',
        name,
        size = 24,
        color = '#000',
        containerSize,
        backgroundColor,
        rounded,
        iconStyle,
        containerStyle,
        disabled,
        onPress,
        onPressIn,
        onPressOut,
        onLongPress,
        Component = onPress || onLongPress || onPressIn || onPressOut
            ? Pressable
            : View,
    } = props;

    let AppIcon = getIconType(type);

    const buttonStyle: StyleProp<ViewStyle> = useMemo(() => {
        if (containerSize) {
            return {
                height: containerSize,
                width: containerSize,
                borderRadius: rounded ? containerSize : 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor,
            };
        }
        return {};
    }, [backgroundColor, containerSize, rounded]);

    return (
        <Component
            style={StyleSheet.flatten([buttonStyle, containerStyle])}
            disabled={disabled}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onLongPress={onLongPress}
        >
            <AppIcon name={name} size={size} color={color} style={iconStyle} />
        </Component>
    );
};

export default Icon;
