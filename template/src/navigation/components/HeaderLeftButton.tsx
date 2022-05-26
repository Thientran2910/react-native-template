import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {HeaderBackButtonProps} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppMainParamList} from '@navigation/types';
import Icon from '@components/elements/Icon';

export interface HeaderLeftButtonProps extends HeaderBackButtonProps {
    ContentComponent?: React.ReactNode;
}

export default memo((props: HeaderLeftButtonProps) => {
    const navigation = useNavigation<StackNavigationProp<AppMainParamList>>();

    const {ContentComponent} = props;

    return (
        <TouchableOpacity
            onPress={() => {
                props.canGoBack && navigation.goBack();
            }}
            style={styles.container}
        >
            {ContentComponent || <Icon name="arrow-left" size={24} />}
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});
