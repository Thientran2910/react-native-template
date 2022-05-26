import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import HeaderLeftButton from '@navigation/components/HeaderLeftButton';
import {MulishFont} from '@constants';

const defaultNavigationOptions: StackNavigationOptions = {
    headerTruncatedBackTitle: '',
    headerBackTitleVisible: false,
    headerBackAllowFontScaling: true,
    headerTitleAllowFontScaling: true,
    headerTitleStyle: {
        textAlign: 'center',
        fontFamily: MulishFont.Bold,
        fontSize: 18,
    },
    headerTitleContainerStyle: {
        maxWidth: '70%',
        marginHorizontal: 0,
        marginLeft: 0,
        paddingLeft: 0,
    },
    headerTitleAlign: 'center',
    cardStyle: {
        opacity: 1,
    },
    headerStyle: {
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 0,
    },
    headerLeft: props => <HeaderLeftButton {...props} />,
};

export {defaultNavigationOptions};
