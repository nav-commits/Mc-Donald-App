import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ position, top, left, title, backgroundColor, width , onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                elevation: 8,
                borderRadius: 2,
                paddingHorizontal: 10,
                paddingVertical: 10,
                position: position,
                left: left,
                backgroundColor: backgroundColor,
                top: top,
                width: width
            }}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonText: {
        fontSize: 12,
        color: '#fff',
        alignSelf: 'center',
        color: 'black',
    },
});
