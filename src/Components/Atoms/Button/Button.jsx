import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button({
    position,
    top,
    left,
    title,
    backgroundColor,
    width,
    onPress,
    marginLeft,
    border,
    borderRadius,
    marginTop,
    icon,
    paddingHorizontal,
    paddingVertical
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                elevation: 8,
                borderRadius: borderRadius,
                paddingHorizontal: paddingHorizontal,
                paddingVertical: paddingVertical,
                position: position,
                left: left,
                backgroundColor: backgroundColor,
                top: top,
                width: width,
                marginLeft: marginLeft,
                border: border,
                marginTop: marginTop,
            }}
        >
            {icon ? (
                <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{marginRight:5}}>{icon}</Text>
                    <Text style={styles.appButtonText}>{title}</Text>
                </View>
            ) : (
                <Text style={styles.appButtonText}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonText: {
        fontSize: 11,
        color: '#fff',
        alignSelf: 'center',
        color: 'black',
    },
});
