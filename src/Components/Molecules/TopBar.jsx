import { StyleSheet, View, Image } from 'react-native';

export default function TopBar({ content, alignItems }) {
    return (
        <View
            style={{
                display: 'flex',
                alignItems: alignItems,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 0.9,
                padding: 10,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 3 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 5,
            }}
        >
            {content}
        </View>
    );
}
