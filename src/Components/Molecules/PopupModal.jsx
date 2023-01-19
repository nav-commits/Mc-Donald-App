import { View, Modal, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PopupModal({ modalVisible, activeItem, icon, info }) {
    return (
        <View style={styles.centeredView}>
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {icon}
                        {info}
                        <Text style={styles.modalText}>{activeItem?.title}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text>${activeItem?.standardPrice?.price}</Text>
                            <Text style={{paddingLeft: 10}}>{activeItem?.standardPrice?.cal} cals</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                        >
                            <Image
                                source={{ uri: activeItem?.img }}
                                style={{ width: 205, height: 205 }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        padding: 20,
        height: '100%',
        width: '100%',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
       paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
});
