import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default memo(() => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
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
