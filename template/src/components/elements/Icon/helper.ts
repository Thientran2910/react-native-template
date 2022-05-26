import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import phosphorConfig from '@assets/fonts/Phosphor.json';
import {IconType} from '@components/elements/Icon/types';

export const getIconType = (type: IconType = 'System') => {
    let AppIcon = createIconSetFromIcoMoon(
        phosphorConfig,
        'Phosphor',
        'Phosphor.ttf',
    );

    switch (type) {
        case 'Ionicons':
            const Ionicons =
                require('react-native-vector-icons/Ionicons').default;
            AppIcon = Ionicons;
            break;
        case 'AntDesign':
            const AntDesign =
                require('react-native-vector-icons/AntDesign').default;
            AppIcon = AntDesign;
            break;
        case 'Entypo':
            const Entypo = require('react-native-vector-icons/Entypo').default;
            AppIcon = Entypo;
            break;
        case 'Feather':
            const Feather =
                require('react-native-vector-icons/Feather').default;
            AppIcon = Feather;
            break;
        case 'FontAwesome':
            const FontAwesome =
                require('react-native-vector-icons/FontAwesome').default;
            AppIcon = FontAwesome;
            break;
        case 'FontAwesome5':
            const FontAwesome5 =
                require('react-native-vector-icons/FontAwesome5').default;
            AppIcon = FontAwesome5;
            break;
        case 'Fontisto':
            const Fontisto =
                require('react-native-vector-icons/Fontisto').default;
            AppIcon = Fontisto;
            break;
        case 'EvilIcons':
            const EvilIcons =
                require('react-native-vector-icons/EvilIcons').default;
            AppIcon = EvilIcons;
            break;
        case 'MaterialCommunityIcons':
            const MaterialCommunityIcons =
                require('react-native-vector-icons/MaterialCommunityIcons').default;
            AppIcon = MaterialCommunityIcons;
            break;
        case 'MaterialIcons':
            const MaterialIcons =
                require('react-native-vector-icons/MaterialIcons').default;
            AppIcon = MaterialIcons;
            break;
        case 'SimpleLineIcons':
            const SimpleLineIcons =
                require('react-native-vector-icons/SimpleLineIcons').default;
            AppIcon = SimpleLineIcons;
            break;
        case 'Octicons':
            const Octicons =
                require('react-native-vector-icons/Octicons').default;
            AppIcon = Octicons;
            break;
        default:
            break;
    }

    return AppIcon;
};
