import { StyleSheet, View } from 'react-native';

export default function PresentationCard({ img, button, height, marginTop, title, codeContent }) {
    return (
        <View
            style={{
                borderRadius: 5,
                elevation: 3,
                backgroundColor: '#fff',
                shadowOffset: { width: 2, height: 3 },
                shadowColor: 0.5,
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginHorizontal: 4,
                marginVertical: 6,
                marginLeft: 18,
                marginRight: 30,
                height: height,
                marginTop: marginTop
            }}
        >
            {title}
            {img}
            {button}
            {codeContent}
        </View>
    );
}
