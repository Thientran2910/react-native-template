import React from 'react';
import {
    Image,
    StyleSheet,
    ImageSourcePropType,
    StyleProp,
    ImageStyle,
    ImageProps,
} from 'react-native';

export interface ImageIconProps extends ImageProps {
    source: ImageSourcePropType;
    size?: number;
    color?: string;
    containerStyle?: StyleProp<ImageStyle>;
    theme?: any;
}

const ImageIcon: React.FC<ImageIconProps> = (props: ImageIconProps) => {
    const {
        source,
        size = 24,
        color = '#000',
        containerStyle,
        resizeMode,
    } = props;

    return (
        <Image
            source={source}
            resizeMode={resizeMode}
            style={[
                styles.image,
                {tintColor: color},
                {height: size, width: size},
                containerStyle,
            ]}
        />
    );
};

export default ImageIcon;

const styles = StyleSheet.create({
    image: {
        height: 24,
        width: 24,
    },
});
