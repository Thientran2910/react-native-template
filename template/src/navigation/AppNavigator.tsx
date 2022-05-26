import React from 'react';

function AppNavigator() {
    let MainNavigator = null;

    MainNavigator = require('@navigation/AppMain').default;

    return <MainNavigator />;
}

export default AppNavigator;
