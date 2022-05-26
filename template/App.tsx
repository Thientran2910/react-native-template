import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from '@components/elements/Icon';

export default memo(() => {
    return (
        <View style={styles.container}>
            <Text>App.tsx</Text>
            <Icon name="house" />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
