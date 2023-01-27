import { StyleSheet, View, Text, FlatList } from 'react-native';
export default function TabContent({ type, onPress, activeItem, isInView }) {
    return (
        <FlatList
            style={styles.listStyle}
            keyExtractor={(key) => {
                return key;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={type}
            renderItem={({ item, index }) => {
                return (
                    <View
                        style={{
                            backgroundColor: 'white',
                            paddingLeft: 20,
                        }}
                    >

                        <Text
                            onPress={() => onPress(index)}
                            style={{
                                paddingLeft: 5,
                                fontWeight: index === activeItem || isInView ? 'bold' : '',
                                borderBottomWidth: index === activeItem || isInView ? 4 : null,
                                borderBottomColor: index === activeItem || isInView ? '#ffbc0d' : '',
                                paddingBottom: 5
                            }}
                        >
                            {item}
                        </Text>

                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    listStyle: {
        textAlign: 'center',
        margin: 5,
        padding: 10,
    },
});