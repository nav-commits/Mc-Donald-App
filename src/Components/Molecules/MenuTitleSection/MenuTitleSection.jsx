import { View, Text } from 'react-native';
import Title from '../../Atoms/Title/Title';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MenuTitleSection({ title, onPress, size, paddingLeft,paddingTop, iconTitle}) {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Title
                title={title}
                size={size}
                paddingLeft={paddingLeft}
                paddingTop={paddingTop}
            />
            <Text
                onPress={() => onPress(title)}
                style={{ paddingTop: 20, paddingRight: 10, color: '#357EC7' }}
            >
               {iconTitle}
                <Ionicons name={'arrow-forward'} />
            </Text>
        </View>
    );
}
